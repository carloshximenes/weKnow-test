import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import IProduct from 'src/app/interfaces/IProduct.interface';
import { ProductItemService } from './product-item.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: ProductItemService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.checkParams();
  }

  private initForm(): void {
    this.form = this._fb.group({
      _id: [null],
      descricao: [null, Validators.required],
    });
  }

  private checkParams(): void {
    this._route.params.pipe(take(1)).subscribe((params) => {
      let productId = params['id'];
      if (productId) {
        this.getProductById(productId);
      }
    });
  }

  private getProductById(id: string): void {
    this._service
      .getProduct(id)
      .pipe(take(1))
      .subscribe((product: IProduct) => {
        this.form.get('_id')?.patchValue(product._id);
        this.form.get('descricao')?.patchValue(product.descricao);
      });
  }

  public setProduct(): void {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }
    const { _id, descricao } = this.form.value;

    let product: IProduct = {
      _id,
      descricao,
    };

    this._service
      .setProduct(product)
      .pipe(take(1))
      .subscribe({
        next: (p: IProduct) => {
          this._router.navigate([`products`]);
        },
        error: (err) => console.log(err),
      });
  }
}
