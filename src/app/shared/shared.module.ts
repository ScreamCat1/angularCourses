import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './angular-material/material.module';
import { ConvertPricePipe } from './pipes/convert-price.pipe';
import { ActiveblockDirective } from './directives/activeblock.directive';

@NgModule({
  imports: [
    CommonModule,

    MaterialModule
  ],
  declarations: [ActiveblockDirective, ConvertPricePipe, ActiveblockDirective],
  exports: [
    MaterialModule,

    ActiveblockDirective,

    ConvertPricePipe
  ]
})
export class SharedModule { }
