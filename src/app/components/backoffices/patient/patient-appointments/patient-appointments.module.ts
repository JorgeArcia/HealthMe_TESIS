import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientAppointmentsRoutingModule } from './patient-appointments-routing.module';
import { PatientAppointmentsComponent } from './patient-appointments.component';


@NgModule({
  declarations: [
    PatientAppointmentsComponent
  ],
  imports: [
    CommonModule,
    PatientAppointmentsRoutingModule
  ]
})
export class PatientAppointmentsModule { }
