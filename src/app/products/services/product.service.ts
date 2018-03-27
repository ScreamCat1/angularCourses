import { Injectable } from '@angular/core';

import { products } from '../models/products';

@Injectable()
export class ProductService {
  getProducts() {
    return products;
  }
}
