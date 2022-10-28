import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientAppointmentsComponent } from './patient-appointments.component';

const routes: Routes = [
  { path: '', component: PatientAppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientAppointmentsRoutingModule { }
