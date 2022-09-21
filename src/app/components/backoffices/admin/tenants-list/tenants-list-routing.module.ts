import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantsListComponent } from './tenants-list.component';

const routes: Routes = [
  { path: '', component: TenantsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantsListRoutingModule { }
