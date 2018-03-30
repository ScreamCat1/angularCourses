import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './angular-material/material.module';
import { ConvertPricePipe } from './pipes/convert-price.pipe';
import { ActiveblockDirective } from './directives/activeblock.directive';
import { FocusBlockDirective } from './directives/focus-block.directive';

@NgModule({
  imports: [
    CommonModule,

    MaterialModule
  ],
  declarations: [
    ConvertPricePipe,

    ActiveblockDirective,
    FocusBlockDirective
  ],
  exports: [
    MaterialModule,

    ActiveblockDirective,
    FocusBlockDirective,

    ConvertPricePipe
  ]
})
export class SharedModule { }
