import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../shared/material.module';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductService } from './shared/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MaterialModule
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
