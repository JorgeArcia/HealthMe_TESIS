import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantProfessionalLinkRoutingModule } from './tenant-professional-link-routing.module';
import { TenantProfessionalLinkComponent } from './tenant-professional-link.component';


@NgModule({
  declarations: [
    TenantProfessionalLinkComponent
  ],
  imports: [
    CommonModule,
    TenantProfessionalLinkRoutingModule
  ]
})
export class TenantProfessionalLinkModule { }
