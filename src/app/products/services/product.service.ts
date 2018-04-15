import { Injectable } from '@angular/core';

import { products } from '../models/products';
import { Product } from './../models/product.model';

@Injectable()
export class ProductService {
  getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      resolve(products);
      reject(`Couldn't load data`);
    } );
  }

  changeProduct(product: Product) {
    products[products.findIndex(p => p.id === product.id )] = product;
  }
}
