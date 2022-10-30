import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantProfessionalSpecialitiesComponent } from './tenant-professional-specialities.component';

const routes: Routes = [
  {path:'', component: TenantProfessionalSpecialitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantProfessionalSpecialitiesRoutingModule { }
