import { Component, OnInit } from '@angular/core';

import { OrdersService } from './../../orders/shared/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {}

  get hasProducts(): boolean {
    return !!this.ordersService.allProducts;
  }

}
