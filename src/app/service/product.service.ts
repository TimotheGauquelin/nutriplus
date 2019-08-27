import { ProductResponse } from './../model/productmodel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class ProductService {
   constructor(
    private httpClient: HttpClient ) { }

public getProducts(code: number): Observable<ProductResponse> {
  return this.httpClient.get<ProductResponse>('https://world.openfoodfacts.org/api/v0/product/' + code);
}
}
