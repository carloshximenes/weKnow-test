import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import IProduct from 'src/app/interfaces/IProduct.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(private _service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this._service
      .getProducts()
      .pipe(take(1))
      .subscribe((list: IProduct[]) => {
        this.products = list;
      });
  }

  public deleteProduct(id: string): void {
    this._service
      .deleteProduct(id)
      .pipe(take(1))
      .subscribe((r) => {
        if (!r) {
          console.log(`DELETED`);
        }
      });
  }
}
