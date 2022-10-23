import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDashboardRoutingModule } from './patient-dashboard-routing.module';
import { PatientDashboardComponent } from './patient-dashboard.component';


@NgModule({
  declarations: [
    PatientDashboardComponent
  ],
  imports: [
    CommonModule,
    PatientDashboardRoutingModule
  ]
})
export class PatientDashboardModule { }
