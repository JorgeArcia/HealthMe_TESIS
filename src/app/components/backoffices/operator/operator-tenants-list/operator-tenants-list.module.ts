import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorTenantsListRoutingModule } from './operator-tenants-list-routing.module';
import { OperatorTenantsListComponent } from './operator-tenants-list.component';


@NgModule({
  declarations: [
    OperatorTenantsListComponent
  ],
  imports: [
    CommonModule,
    OperatorTenantsListRoutingModule
  ]
})
export class OperatorTenantsListModule { }
