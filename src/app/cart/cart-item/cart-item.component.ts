import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { SelectedProduct } from './../../products/products';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
value: string;

constructor(
  private dialogRef: MatDialogRef<CartItemComponent>,
  @Inject(MAT_DIALOG_DATA) public data: SelectedProduct) { }

  ngOnInit() {
    this.value = this.data.selectedColor;
  }

  onNoClick(): void {
    this.dialogRef.close(this.value);
  }

}
