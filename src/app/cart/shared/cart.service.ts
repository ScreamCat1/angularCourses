import { Injectable } from '@angular/core';

import { SelectedProduct } from './../../products/products';

@Injectable()
export class CartService {

  numberOfProducts(products: Array<SelectedProduct>): number {
    return products.length;
  }

  summaryPrice(products: Array<SelectedProduct>) {
    return products.reduce((prevSummary, product) => prevSummary + product.price, 0);
  }

}
