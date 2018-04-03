import { products } from './../../products/models/products';
import { Injectable } from '@angular/core';
import { SelectedProduct } from '../../products/models/products';

@Injectable()
export class OrdersService {
  private selectedProducts: Array<SelectedProduct> = [];

  get allProducts(): Array<SelectedProduct> {
    return this.selectedProducts;
  }

  set allProducts(p: Array<SelectedProduct>) {
    this.selectedProducts = p;
  }

  addProduct(product: SelectedProduct): void {
    this.selectedProducts.push(product);
  }

  clearProducts(): void {
    this.selectedProducts = [];
  }

  deleteProduct(product: SelectedProduct): void {
    this.selectedProducts = this.selectedProducts.filter((p) => p.id !== product.id);
  }
}
