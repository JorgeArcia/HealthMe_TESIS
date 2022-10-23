import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantProfessionalLinkComponent } from './tenant-professional-link.component';

const routes: Routes = [
  {path:'',component:TenantProfessionalLinkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantProfessionalLinkRoutingModule { }
