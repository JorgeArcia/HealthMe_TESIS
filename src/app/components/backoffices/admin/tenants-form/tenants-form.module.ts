import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TenantsFormRoutingModule } from './tenants-form-routing.module';
import { TenantsFormComponent } from './tenants-form.component';


@NgModule({
  declarations: [
    TenantsFormComponent,
  ],
  imports: [
    CommonModule,
    TenantsFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TenantsFormModule { }
