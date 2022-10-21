import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperatorTenantsListComponent } from './operator-tenants-list.component';

const routes: Routes = [
  { path: '', component: OperatorTenantsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorTenantsListRoutingModule { }
