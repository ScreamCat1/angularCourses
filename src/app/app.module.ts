import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CartModule } from './cart/cart.module';
import { MaterialModule } from './shared/material.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

// import { CartService } from './cart/shared/cart.service';

import { AppComponent } from './app.component';
// import { CartComponent } from './cart/cart/cart.component';
// import { CartListComponent } from './cart/cart-list/cart-list/cart-list.component';
// import { OrderComponent } from './orders/order/order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    // CartListComponent,
    // OrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CartModule,
    OrdersModule,
    ProductsModule
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
