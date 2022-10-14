import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TenantOperatorLinkRoutingModule } from './tenant-operator-link-routing.module';
import { TenantOperatorLinkComponent } from './tenant-operator-link.component';


@NgModule({
  declarations: [
    TenantOperatorLinkComponent
  ],
  imports: [
    CommonModule,
    TenantOperatorLinkRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TenantOperatorLinkModule { }
