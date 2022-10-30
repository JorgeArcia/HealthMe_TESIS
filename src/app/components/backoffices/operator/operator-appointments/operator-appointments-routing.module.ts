import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorAppointmentsComponent } from './operator-appointments.component';

const routes: Routes = [
  {path:'',component:OperatorAppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorAppointmentsRoutingModule { }
