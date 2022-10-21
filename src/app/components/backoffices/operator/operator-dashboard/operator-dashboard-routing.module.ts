import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperatorDashboardComponent } from './operator-dashboard.component';

const routes: Routes = [
  { path: '', component: OperatorDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorDashboardRoutingModule { }
