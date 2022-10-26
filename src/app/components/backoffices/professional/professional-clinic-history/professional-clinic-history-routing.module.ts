import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfessionalClinicHistoryComponent } from './professional-clinic-history.component';

const routes: Routes = [
  { path: '', component: ProfessionalClinicHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalClinicHistoryRoutingModule { }
