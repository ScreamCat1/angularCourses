import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
  ]
})
export class MaterialModule { }
