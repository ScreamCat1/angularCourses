import { Component, OnInit, Input } from '@angular/core';

import { OrdersService } from '../shared/orders.service';

import { SelectedProduct } from '../../products/products';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input()product: SelectedProduct;
  products: Array<SelectedProduct>;

  constructor( private ordersService: OrdersService) {}

  ngOnInit() {
    this.products = this.ordersService.allProducts;
  }

  get hasProducts(): boolean {
    return !!this.products.length;
  }

  deleteSelectedProduct(selectedProduct: SelectedProduct): void {
    this.products.splice(this.products.indexOf(selectedProduct), 1);
  }
}
