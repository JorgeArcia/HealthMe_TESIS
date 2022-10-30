import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalAppointmentsRoutingModule } from './professional-appointments-routing.module';
import { ProfessionalAppointmentsComponent } from './professional-appointments.component';


@NgModule({
  declarations: [
    ProfessionalAppointmentsComponent
  ],
  imports: [
    CommonModule,
    ProfessionalAppointmentsRoutingModule
  ]
})
export class ProfessionalAppointmentsModule { }
