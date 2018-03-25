import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { CartService } from './../shared/cart.service';
import { OrdersService } from './../../orders/shared/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {
@ViewChild('elseWrapper') elseWrapper: ElementRef;
  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.elseWrapper.nativeElement.style.fontWeight = 'bold';
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

}
