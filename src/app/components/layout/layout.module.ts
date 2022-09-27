import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonHeaderComponent } from './common-header/common-header.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { OperatorHeaderComponent } from './operator-header/operator-header.component';
import { ProfessionalHeaderComponent } from './professional-header/professional-header.component';
import { PatientHeaderComponent } from './patient-header/patient-header.component';
import { CommonBannerComponent } from './common-banner/common-banner.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';

@NgModule({
  declarations: [
    CommonHeaderComponent,
    AdminHeaderComponent,
    OperatorHeaderComponent,
    ProfessionalHeaderComponent,
    PatientHeaderComponent,
    CommonBannerComponent,
    CommonFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonHeaderComponent,
    AdminHeaderComponent,
    OperatorHeaderComponent,
    ProfessionalHeaderComponent,
    PatientHeaderComponent,
    CommonBannerComponent,
    CommonFooterComponent
  ]
})
export class LayoutModule { }
