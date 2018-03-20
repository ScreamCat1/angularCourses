import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared/material.module';

import { OrdersService } from './shared/orders.service';

import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './orders-list/order-list.component';

@NgModule({
  imports: [
    CommonModule,

    MaterialModule
  ],
  declarations: [
    OrderComponent,
    OrderListComponent
  ],
  providers: [
    OrdersService
  ],
  exports: [
    OrderListComponent
  ]
})
export class OrdersModule { }
