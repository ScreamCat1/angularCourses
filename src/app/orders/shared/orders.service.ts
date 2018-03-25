import { Injectable } from '@angular/core';
import { SelectedProduct } from '../../products/products';

@Injectable()
export class OrdersService {
  private selectedProducts: Array<SelectedProduct> = [];

  get allProducts(): Array<SelectedProduct> {
    return this.selectedProducts;
  }

  addProduct(product: SelectedProduct): void {
    this.selectedProducts.push(product);
  }

  deleteProduct(product: SelectedProduct): void {
    this.selectedProducts = this.selectedProducts.filter((p) => p.id !== product.id);
  }
}
