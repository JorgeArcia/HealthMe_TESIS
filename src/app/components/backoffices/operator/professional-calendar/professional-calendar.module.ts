import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalCalendarRoutingModule } from './professional-calendar-routing.module';
import { ProfessionalCalendarComponent } from './professional-calendar.component';


@NgModule({
  declarations: [
    ProfessionalCalendarComponent
  ],
  imports: [
    CommonModule,
    ProfessionalCalendarRoutingModule
  ]
})
export class ProfessionalCalendarModule { }
