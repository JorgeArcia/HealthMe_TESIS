import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalAgendaListRoutingModule } from './professional-agenda-list-routing.module';
import { ProfessionalAgendaListComponent } from './professional-agenda-list.component';


@NgModule({
  declarations: [
    ProfessionalAgendaListComponent
  ],
  imports: [
    CommonModule,
    ProfessionalAgendaListRoutingModule
  ]
})
export class ProfessionalAgendaListModule { }
