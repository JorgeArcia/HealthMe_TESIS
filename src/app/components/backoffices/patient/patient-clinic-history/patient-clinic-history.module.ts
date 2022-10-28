import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientClinicHistoryRoutingModule } from './patient-clinic-history-routing.module';
import { PatientClinicHistoryComponent } from './patient-clinic-history.component';


@NgModule({
  declarations: [
    PatientClinicHistoryComponent
  ],
  imports: [
    CommonModule,
    PatientClinicHistoryRoutingModule
  ]
})
export class PatientClinicHistoryModule { }
