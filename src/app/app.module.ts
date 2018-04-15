
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo-component/demo.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CoreModule,
    CartModule,
    AdminModule,
    OrdersModule,
    SharedModule,
    ProductsModule,
    AppRoutingModule,
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
