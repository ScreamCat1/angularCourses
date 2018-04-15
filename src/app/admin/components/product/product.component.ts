import { Product } from './../../../products/models/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() changeProduct = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  saveChangedProduct(): void {
    this.changeProduct.emit(this.product);
  }

}
