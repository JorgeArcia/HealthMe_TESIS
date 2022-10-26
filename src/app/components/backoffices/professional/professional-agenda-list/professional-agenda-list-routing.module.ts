import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfessionalAgendaListComponent } from './professional-agenda-list.component'; 

const routes: Routes = [
  { path: '', component: ProfessionalAgendaListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalAgendaListRoutingModule { }
