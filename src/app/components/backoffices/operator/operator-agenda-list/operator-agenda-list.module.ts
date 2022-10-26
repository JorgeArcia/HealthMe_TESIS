import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorAgendaListRoutingModule } from './operator-agenda-list-routing.module';
import { OperatorAgendaListComponent } from './operator-agenda-list.component';


@NgModule({
  declarations: [
    OperatorAgendaListComponent
  ],
  imports: [
    CommonModule,
    OperatorAgendaListRoutingModule
  ]
})
export class OperatorAgendaListModule { }
