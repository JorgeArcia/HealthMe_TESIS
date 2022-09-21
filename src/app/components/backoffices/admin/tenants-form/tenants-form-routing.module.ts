import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantsFormComponent } from './tenants-form.component';

const routes: Routes = [
  { path: '', component: TenantsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantsFormRoutingModule { }
