import { Component, OnInit, Input } from '@angular/core';

import { OrdersService } from './../shared/orders.service';

import { SelectedProduct } from '../../products/models/products';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  products: Array<SelectedProduct>;

  @Input()orderName: string;
  @Input()orderDirection: boolean;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.products = this.ordersService.allProducts;
  }
}
