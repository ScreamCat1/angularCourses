import { Component, OnInit } from '@angular/core';

import { CartService } from '../shared/cart.service';

import { SelectedProduct } from '../../products/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Array<SelectedProduct>;

  constructor( private cartService: CartService) {}

  ngOnInit() {
    this.products = this.cartService.allProducts;
  }

  deleteSelectedProduct(selectedProduct: SelectedProduct): void {
    this.products.splice(this.products.indexOf(selectedProduct), 1);
  }

  get hasProducts(): boolean {
    return !!this.products.length;
  }
}
