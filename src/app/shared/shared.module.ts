import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './angular-material/material.module';
import { ConvertPricePipe } from './pipes/convert-price.pipe';

@NgModule({
  imports: [
    CommonModule,

    MaterialModule
  ],
  declarations: [ConvertPricePipe],
  exports: [
    MaterialModule,

    ConvertPricePipe
  ]
})
export class SharedModule { }
