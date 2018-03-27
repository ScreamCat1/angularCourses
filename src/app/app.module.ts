
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo-component/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CoreModule,
    CartModule,
    OrdersModule,
    SharedModule,
    ProductsModule
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
