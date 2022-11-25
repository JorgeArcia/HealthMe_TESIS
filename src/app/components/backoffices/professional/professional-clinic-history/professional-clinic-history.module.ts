import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfessionalClinicHistoryRoutingModule } from './professional-clinic-history-routing.module';
import { ProfessionalClinicHistoryComponent } from './professional-clinic-history.component';


@NgModule({
  declarations: [
    ProfessionalClinicHistoryComponent
  ],
  imports: [
    CommonModule,
    ProfessionalClinicHistoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProfessionalClinicHistoryModule { }
