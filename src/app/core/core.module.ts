import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigOptionsService } from './services/config-options.service';
import { LocalStorageService } from './services/local-storage.service';
import { CONSTANT_SERVICE, ConstantValue } from './services/constant.service';
import { GeneratorFactory, GeneratorService } from './services/generator.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ConfigOptionsService,
    LocalStorageService,
    { provide: CONSTANT_SERVICE, useValue:  ConstantValue },
    { provide: GeneratorService, useFactory: GeneratorFactory}
  ]
})
export class CoreModule { }
