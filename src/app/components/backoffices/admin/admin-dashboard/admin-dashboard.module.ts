import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { TenantsListModule } from '../tenants-list/tenants-list.module';

@NgModule({
  declarations: [
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    TenantsListModule
  ]
})
export class AdminDashboardModule { }
