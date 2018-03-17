import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SelectedProduct } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()product: SelectedProduct;
  @Output() addProduct = new EventEmitter();

  selectedColor: string;
  selectedSize: string;
  onBuy(product) {
    this.addProduct.emit({
      ...this.product,
      selectedColor: this.selectedColor,
      selectedSize: this.selectedSize
    });

    console.log(`Product '${this.product.name}' was bought`);
  }

  get isEnabled(): boolean {
    return !!this.selectedColor && !!this.selectedSize;
  }

}
