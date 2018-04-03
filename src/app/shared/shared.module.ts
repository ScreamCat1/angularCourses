import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './angular-material/material.module';
import { ConvertPricePipe } from './pipes/convert-price.pipe';
import { ActiveblockDirective } from './directives/activeblock.directive';
import { FocusBlockDirective } from './directives/focus-block.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule,

    MaterialModule
  ],
  declarations: [
    ConvertPricePipe,
    OrderByPipe,

    ActiveblockDirective,
    FocusBlockDirective
  ],
  exports: [
    MaterialModule,

    ActiveblockDirective,
    FocusBlockDirective,

    ConvertPricePipe,
    OrderByPipe
  ]
})
export class SharedModule { }
