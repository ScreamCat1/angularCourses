import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OrdersModule } from '../orders/orders.module';
import { SharedModule } from '../shared/shared.module';

import { CartService } from './shared/cart.service';

import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,

    OrdersModule,
    SharedModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  providers: [
    CartService
  ],
  exports: [
    CartComponent,
    CartItemComponent
  ],
  bootstrap: [CartItemComponent]
})
export class CartModule { }
