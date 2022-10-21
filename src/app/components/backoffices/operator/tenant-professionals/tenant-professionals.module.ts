import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantProfessionalsRoutingModule } from './tenant-professionals-routing.module';
import { TenantProfessionalsComponent } from './tenant-professionals.component';


@NgModule({
  declarations: [
    TenantProfessionalsComponent
  ],
  imports: [
    CommonModule,
    TenantProfessionalsRoutingModule
  ]
})
export class TenantProfessionalsModule { }
