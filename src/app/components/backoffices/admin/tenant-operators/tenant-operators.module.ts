import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantOperatorsRoutingModule } from './tenant-operators-routing.module';
import { TenantOperatorsComponent } from './tenant-operators.component';


@NgModule({
  declarations: [
    TenantOperatorsComponent
  ],
  imports: [
    CommonModule,
    TenantOperatorsRoutingModule
  ]
})
export class TenantOperatorsModule { }
