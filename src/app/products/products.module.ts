import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductService } from './shared/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SharedModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
