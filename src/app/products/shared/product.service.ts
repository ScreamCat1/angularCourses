import { Injectable } from '@angular/core';

import { products } from '../products';

@Injectable()
export class ProductService {
  getProducts() {
    return products;
  }
}
