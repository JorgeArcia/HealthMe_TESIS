import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalTenantsListRoutingModule } from './professional-tenants-list-routing.module';
import { ProfessionalTenantsListComponent } from './professional-tenants-list.component';


@NgModule({
  declarations: [
    ProfessionalTenantsListComponent
  ],
  imports: [
    CommonModule,
    ProfessionalTenantsListRoutingModule
  ]
})
export class ProfessionalTenantsListModule { }
