import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalsListRoutingModule } from './professionals-list-routing.module';
import { ProfessionalsListComponent } from './professionals-list.component';


@NgModule({
  declarations: [
    ProfessionalsListComponent
  ],
  imports: [
    CommonModule,
    ProfessionalsListRoutingModule
  ]
})
export class ProfessionalsListModule { }
