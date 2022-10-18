import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorDashboardRoutingModule } from './operator-dashboard-routing.module';
import { OperatorDashboardComponent } from './operator-dashboard.component';


@NgModule({
  declarations: [
    OperatorDashboardComponent
  ],
  imports: [
    CommonModule,
    OperatorDashboardRoutingModule
  ]
})
export class OperatorDashboardModule { }
