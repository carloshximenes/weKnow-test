import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS_API } from 'src/app/constants/api-url.constant';
import IProduct from 'src/app/interfaces/IProduct.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private _http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(PRODUCTS_API);
  }

  public deleteProduct(id: string): Observable<any> {
    return this._http.delete(`${PRODUCTS_API}/${id}`);
  }
}
