import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorAppointmentsRoutingModule } from './operator-appointments-routing.module';
import { OperatorAppointmentsComponent } from './operator-appointments.component';


@NgModule({
  declarations: [
    OperatorAppointmentsComponent
  ],
  imports: [
    CommonModule,
    OperatorAppointmentsRoutingModule
  ]
})
export class OperatorAppointmentsModule { }
