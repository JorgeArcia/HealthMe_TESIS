import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantProfessionalsListRoutingModule } from './tenant-professionals-list-routing.module';
import { TenantProfessionalsListComponent } from './tenant-professionals-list.component';


@NgModule({
  declarations: [
    TenantProfessionalsListComponent
  ],
  imports: [
    CommonModule,
    TenantProfessionalsListRoutingModule
  ]
})
export class TenantProfessionalsListModule { }
