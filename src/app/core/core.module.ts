import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigOptionsService } from './services/config-options.service';
import { LocalStorageService } from './services/local-storage.service';
import { ConstantService } from './services/constant.service';
import { GeneratorFactory, GeneratorService } from './services/generator.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ConfigOptionsService,
    LocalStorageService,
    { provide: ConstantService, useValue:  { App: 'TaskManager', Ver: '1.0' }},
    { provide: GeneratorService, useFactory: GeneratorFactory}
  ]
})
export class CoreModule { }
