import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsFormRoutingModule } from './operators-form-routing.module';
import { OperatorsFormComponent } from './operators-form.component';


@NgModule({
  declarations: [
    OperatorsFormComponent
  ],
  imports: [
    CommonModule,
    OperatorsFormRoutingModule
  ]
})
export class OperatorsFormModule { }
