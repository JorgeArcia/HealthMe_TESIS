import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientTenantsListComponent } from './patient-tenants-list.component';

const routes: Routes = [
  {path:'',component:PatientTenantsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientTenantsListRoutingModule { }
