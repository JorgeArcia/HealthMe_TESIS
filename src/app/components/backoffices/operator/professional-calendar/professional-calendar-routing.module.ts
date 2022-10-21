import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfessionalCalendarComponent } from './professional-calendar.component';

const routes: Routes = [
  { path: '', component: ProfessionalCalendarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalCalendarRoutingModule { }
