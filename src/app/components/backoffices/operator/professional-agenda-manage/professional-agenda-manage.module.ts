import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalAgendaManageRoutingModule } from './professional-agenda-manage-routing.module';
import { ProfessionalAgendaManageComponent } from './professional-agenda-manage.component';


@NgModule({
  declarations: [
    ProfessionalAgendaManageComponent
  ],
  imports: [
    CommonModule,
    ProfessionalAgendaManageRoutingModule
  ]
})
export class ProfessionalAgendaManageModule { }
