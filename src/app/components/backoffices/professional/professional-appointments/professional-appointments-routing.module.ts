import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalAppointmentsComponent } from './professional-appointments.component';

const routes: Routes = [
  {path: '', component: ProfessionalAppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalAppointmentsRoutingModule { }
