import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminRouterComponents } from './admin-routing.module';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [ adminRouterComponents, ProductComponent ]
})
export class AdminModule { }
