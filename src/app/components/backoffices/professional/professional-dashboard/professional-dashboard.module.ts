import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalDashboardRoutingModule } from './professional-dashboard-routing.module';
import { ProfessionalDashboardComponent } from './professional-dashboard.component';


@NgModule({
  declarations: [
    ProfessionalDashboardComponent
  ],
  imports: [
    CommonModule,
    ProfessionalDashboardRoutingModule
  ]
})
export class ProfessionalDashboardModule { }
