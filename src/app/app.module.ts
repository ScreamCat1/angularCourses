
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo-component/demo.component';
import { IndexComponent } from './index/index.component';
import { MyInterceptor } from './core/interceptors/my.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    IndexComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
