import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';

import { OrdersModule } from '../orders/orders.module';

import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,

    OrdersModule
  ],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
