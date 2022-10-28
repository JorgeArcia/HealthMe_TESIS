import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorAgendaListManageRoutingModule } from './operator-agenda-list-manage-routing.module';
import { OperatorAgendaListManageComponent } from './operator-agenda-list-manage.component';


@NgModule({
  declarations: [
    OperatorAgendaListManageComponent
  ],
  imports: [
    CommonModule,
    OperatorAgendaListManageRoutingModule
  ]
})
export class OperatorAgendaListManageModule { }
