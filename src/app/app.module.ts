import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,

    CartModule,
    OrdersModule,
    ProductsModule
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
