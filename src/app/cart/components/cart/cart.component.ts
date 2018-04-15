import { Component } from '@angular/core';

import { CartService } from './../../shared/cart.service';
import { OrdersService } from './../../../orders/shared/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  orderName = 'name';
  orderDirection = true;

  private directions = {
    'name': false,
    'price': false,
    'quentity': false
  };

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
  ) {}

  onClick({ target: { innerText }  }): void {
    this.orderName = innerText.toLowerCase();
    this.orderDirection = this.directions[innerText];
    this.directions[innerText] = !this.directions[innerText];
  }

  get hasProducts(): boolean {
    return !!this.numberOfProduct;
  }

  get numberOfProduct(): number {
    return this.cartService.numberOfProducts(this.ordersService.allProducts);
  }

  get summaryPrice(): number {
    return this.cartService.summaryPrice(this.ordersService.allProducts);
  }

  clearProducts(): void {
    this.ordersService.clearProducts();
  }

}
