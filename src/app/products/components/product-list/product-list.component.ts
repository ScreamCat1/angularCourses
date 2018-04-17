import { Component, OnInit } from '@angular/core';

import { OrdersService } from '../../../orders/shared/orders.service';

import { Product } from '../../models/product.model';
import { ProductsPromiseService } from '../../services/products-promise.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductsPromiseService,
    private ordersService: OrdersService) {}

  ngOnInit() {
    this.getProducts().catch(err => console.log(err));
  }
  addProduct(product) {
    this.ordersService.addProduct(product);
  }

  private async getProducts() {
    this.products = await this.productService.getProducts();
  }
}
