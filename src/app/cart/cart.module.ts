import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OrdersModule } from '../orders/orders.module';
import { SharedModule } from '../shared/shared.module';

import { CartService } from './shared/cart.service';

import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,

    OrdersModule,
    SharedModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent,
    CartFormComponent
  ],
  providers: [
    CartService
  ],
  exports: [
    CartComponent,
    CartItemComponent
  ],
  entryComponents: [CartItemComponent]
})
export class CartModule { }
