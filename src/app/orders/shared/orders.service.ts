import { Injectable } from '@angular/core';
import { SelectedProduct } from '../../products/products';

@Injectable()
export class OrdersService {
  private selectedProducts: Array<SelectedProduct> = [];

  get allProducts(): Array<SelectedProduct> {
    return this.selectedProducts;
  }

  deleteProduct(product: SelectedProduct): void {
    this.selectedProducts = this.selectedProducts.filter((p) => p.id !== product.id);
  }

  addProduct(product: SelectedProduct): void {
    console.log(product);
    this.selectedProducts.push(product);
  }
}
