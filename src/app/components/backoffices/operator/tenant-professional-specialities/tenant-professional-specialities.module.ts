import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantProfessionalSpecialitiesRoutingModule } from './tenant-professional-specialities-routing.module';
import { TenantProfessionalSpecialitiesComponent } from './tenant-professional-specialities.component';


@NgModule({
  declarations: [
    TenantProfessionalSpecialitiesComponent
  ],
  imports: [
    CommonModule,
    TenantProfessionalSpecialitiesRoutingModule
  ]
})
export class TenantProfessionalSpecialitiesModule { }
