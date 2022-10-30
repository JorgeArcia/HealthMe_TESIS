import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAppointmentFormComponent } from './patient-appointment-form.component';

const routes: Routes = [
  {path:'', component: PatientAppointmentFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientAppointmentFormRoutingModule { }
