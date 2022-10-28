import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalClinicHistoryRoutingModule } from './professional-clinic-history-routing.module';
import { ProfessionalClinicHistoryComponent } from './professional-clinic-history.component';


@NgModule({
  declarations: [
    ProfessionalClinicHistoryComponent
  ],
  imports: [
    CommonModule,
    ProfessionalClinicHistoryRoutingModule
  ]
})
export class ProfessionalClinicHistoryModule { }
