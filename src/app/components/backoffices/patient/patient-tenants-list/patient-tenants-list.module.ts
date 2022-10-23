import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientTenantsListRoutingModule } from './patient-tenants-list-routing.module';
import { PatientTenantsListComponent } from './patient-tenants-list.component';


@NgModule({
  declarations: [
    PatientTenantsListComponent
  ],
  imports: [
    CommonModule,
    PatientTenantsListRoutingModule
  ]
})
export class PatientTenantsListModule { }
