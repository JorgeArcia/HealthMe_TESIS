import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientClinicHistoryComponent } from './patient-clinic-history.component';

const routes: Routes = [
  { path: '', component: PatientClinicHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientClinicHistoryRoutingModule { }
