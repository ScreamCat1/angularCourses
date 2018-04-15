import { Component, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { SelectedProduct } from '../../models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnDestroy {
  @Input()product: SelectedProduct;
  @Output() addProduct = new EventEmitter();

  selectedSize: string;
  selectedColor: string;
  selectedQuantity = 1;

  private hasShowComments = false;

  constructor(private router: Router) {}

  ngOnDestroy() {
    console.log('destr');
    this.router.navigate([{ outlets: { popup: null }}]);
  }

  onBuy(product) {
    this.addProduct.emit({
      ...this.product,
      selectedColor: this.selectedColor,
      selectedSize: this.selectedSize,
      quantity: this.selectedQuantity
    });

    console.log(`Product '${this.product.name}' was bought`);
  }

  get isEnabled(): boolean {
    return this.product.isAvailable && !!this.selectedColor && !!this.selectedSize;
  }

  get isAviable(): boolean {
    return this.product.isAvailable;
  }

  navigateToProductInfo(): void {
    this.hasShowComments
    ? this.router.navigate([{ outlets: { popup: null }}])
    : this.router.navigate([{ outlets: { popup: ['comments', this.product.id] }}]);
    this.hasShowComments = !this.hasShowComments;
  }

}
