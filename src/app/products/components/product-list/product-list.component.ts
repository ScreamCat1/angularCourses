import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { OrdersService } from '../../../orders/shared/orders.service';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private productService: ProductService,
    private ordersService: OrdersService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  addProduct(product) {
    this.ordersService.addProduct(product);
  }
}
