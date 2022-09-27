import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS_API } from 'src/app/constants/api-url.constant';
import IProduct from 'src/app/interfaces/IProduct.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductItemService {
  constructor(private _http: HttpClient) {}

  public getProduct(id: string): Observable<IProduct> {
    return this._http.get<IProduct>(`${PRODUCTS_API}/${id}`);
  }

  public setProduct(product: IProduct): Observable<IProduct> {
    let httpParams = new HttpParams().append('descricao', product.descricao);

    if (product._id) {
      httpParams = httpParams.append('_id', product._id);
      return this._http.put<IProduct>(
        `${PRODUCTS_API}/${product._id}`,
        httpParams
      );
    }
    return this._http.post<IProduct>(`${PRODUCTS_API}`, httpParams);
  }
}
