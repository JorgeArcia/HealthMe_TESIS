import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsListRoutingModule } from './operators-list-routing.module';
import { OperatorsListComponent } from './operators-list.component';


@NgModule({
  declarations: [
    OperatorsListComponent
  ],
  imports: [
    CommonModule,
    OperatorsListRoutingModule
  ]
})
export class OperatorsListModule { }
