import { LocalStorageService } from './../../core/services/local-storage.service';
import { products } from './../../products/models/products';
import { Injectable } from '@angular/core';
import { SelectedProduct } from '../../products/models/products';

@Injectable()
export class OrdersService {
  private selectedProducts: Array<SelectedProduct> = [];
  private savedOrder: Array<SelectedProduct> = [];

  constructor(private localStorageService: LocalStorageService) {}

  get allProducts(): Array<SelectedProduct> {
    return !!this.selectedProducts.length
    ? this.selectedProducts
    : this.getLocalOrders();
  }

  set allProducts(p: Array<SelectedProduct>) {
    this.selectedProducts = p;
  }

  addProduct(product: SelectedProduct): void {
    this.saveLocalOrded(product);
    this.selectedProducts.push(product);
  }

  clearProducts(): void {
    this.selectedProducts = [];
  }

  deleteProduct(product: SelectedProduct): void {
    this.selectedProducts = this.selectedProducts.filter((p) => p.id !== product.id);
  }

  private saveLocalOrded(product: SelectedProduct): void {
    const saved = JSON.parse(this.localStorageService.getItem('products')) || [];
    this.localStorageService.setItem('products', JSON.stringify([...saved, product]));
  }

  private getLocalOrders(): Array<SelectedProduct> {
    return JSON.parse(this.localStorageService.getItem('products'));
  }
}
