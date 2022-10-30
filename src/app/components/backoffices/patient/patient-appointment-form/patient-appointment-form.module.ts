import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientAppointmentFormRoutingModule } from './patient-appointment-form-routing.module';
import { PatientAppointmentFormComponent } from './patient-appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientAppointmentFormComponent
  ],
  imports: [
    CommonModule,
    PatientAppointmentFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PatientAppointmentFormModule { }
