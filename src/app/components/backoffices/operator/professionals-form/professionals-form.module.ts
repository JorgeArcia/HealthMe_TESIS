import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalsFormRoutingModule } from './professionals-form-routing.module';
import { ProfessionalsFormComponent } from './professionals-form.component';


@NgModule({
  declarations: [
    ProfessionalsFormComponent
  ],
  imports: [
    CommonModule,
    ProfessionalsFormRoutingModule
  ]
})
export class ProfessionalsFormModule { }
