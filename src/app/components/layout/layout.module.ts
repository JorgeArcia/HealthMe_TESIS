import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonHeaderComponent } from './common-header/common-header.component';

@NgModule({
  declarations: [
    CommonHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CommonHeaderComponent,]
})
export class LayoutModule { }
