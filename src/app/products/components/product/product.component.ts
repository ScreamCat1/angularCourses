import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SelectedProduct } from '../../models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()product: SelectedProduct;
  @Output() addProduct = new EventEmitter();

  selectedSize: string;
  selectedColor: string;

  onBuy(product) {
    this.addProduct.emit({
      ...this.product,
      selectedColor: this.selectedColor,
      selectedSize: this.selectedSize
    });

    console.log(`Product '${this.product.name}' was bought`);
  }

  get isEnabled(): boolean {
    return this.product.isAvailable && !!this.selectedColor && !!this.selectedSize;
  }

  get isAviable(): boolean {
    return this.product.isAvailable;
  }

}
