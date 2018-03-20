import { Component, OnInit } from '@angular/core';

import { OrdersService } from './../shared/orders.service';

import { SelectedProduct } from '../../products/products';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  products: Array<SelectedProduct>;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.products = this.ordersService.allProducts;
  }
}
