import { Component, OnInit, Input } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { OrdersService } from '../shared/orders.service';
import { CartItemComponent } from '../../cart/cart-item/cart-item.component';
import { SelectedProduct } from '../../products/models/products';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input()product: SelectedProduct;
  products: Array<SelectedProduct>;

  constructor(
    private ordersService: OrdersService,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.products = this.ordersService.allProducts;
  }

  get hasProducts(): boolean {
    return !!this.products.length;
  }

  deleteSelectedProduct(selectedProduct: SelectedProduct): void {
    this.products.splice(this.products.indexOf(selectedProduct), 1);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CartItemComponent, {
      width: '450px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
      result > 0
      ? this.product.quantity = result
      : this.deleteSelectedProduct(this.product);
    });
  }


}
