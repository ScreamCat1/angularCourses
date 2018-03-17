import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product.service';
import { CartService } from '../../cart/shared/cart.service';

import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: Array<Product>;

  constructor(
    private productService: ProductService,
    private cartService: CartService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  addProduct(product) {
    this.cartService.addProduct(product);
  }
}
