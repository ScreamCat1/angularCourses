import { products } from './../models/products';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { toPromise } from 'rxjs/operator/toPromise';

import { Product } from './../models/product.model';

@Injectable()
export class ProductsPromiseService {
  private baseUrls = 'http://localhost:3000/products';

  constructor(
    private http: HttpClient
  ) {}

  getProducts(): Promise<Product[]> {
    return this.http.get(this.baseUrls)
      .toPromise()
      .then(data => <Product[]>data)
      .catch(error => this.handleError(error));
  }

  changeProduct(product: Product): Promise<Product> {
  const url = `${this.baseUrls}/${product.id}`,
    body = JSON.stringify(product),
    options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => <Product>response)
      .catch(this.handleError);
  }

  private handleError(error): Promise<any> {
    console.error(error);
    return Promise.reject(error);
  }
}
