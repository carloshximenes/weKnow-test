import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import IProduct from 'src/app/interfaces/IProduct.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(private _service: ProductsService, private _router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this._service
      .getProducts()
      .pipe(take(1))
      .subscribe({
        next: (list: IProduct[]) => {
          this.products = list;
        },
        error: (err) => console.log(err),
      });
  }

  public deleteProduct(id: string): void {
    this._service
      .deleteProduct(id)
      .pipe(take(1))
      .subscribe({
        next: (r) => {
          if (!r) {
            alert('Item removido com sucesso');
            this.getProducts();
          }
        },
        error: (err) => console.log(err),
      });
  }

  public editProduct(id: string): void {
    this._router.navigate([`product/${id}`]);
  }
}
