import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalTenantsListComponent } from './professional-tenants-list.component';

const routes: Routes = [
  {path:'',component:ProfessionalTenantsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalTenantsListRoutingModule { }
