import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantsListRoutingModule } from './tenants-list-routing.module';
import { TenantsListComponent } from './tenants-list.component';


@NgModule({
  declarations: [
    TenantsListComponent
  ],
  imports: [
    CommonModule,
    TenantsListRoutingModule
  ]
})
export class TenantsListModule { }
