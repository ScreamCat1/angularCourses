import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsService } from './comments/shared/comments.service';
import { ConfigOptionsService } from './services/config-options.service';
import { LocalStorageService } from './services/local-storage.service';
import { CONSTANT_SERVICE, ConstantValue } from './services/constant.service';
import { GeneratorFactory, GeneratorService } from './services/generator.service';

import { AuthGuard } from './guards/auth.guard';

import { AuthService } from './services/auth.service';

import { LoginComponent } from './components/login/login.component';
import { CommentsComponent } from './comments/component/comments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    CommentsComponent,
  ],
  providers: [
    AuthGuard,
    AuthService,
    CommentsService,
    LocalStorageService,
    ConfigOptionsService,
    { provide: CONSTANT_SERVICE, useValue:  ConstantValue },
    { provide: GeneratorService, useFactory: GeneratorFactory },
  ],
  exports: [
    CommentsComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
 }
