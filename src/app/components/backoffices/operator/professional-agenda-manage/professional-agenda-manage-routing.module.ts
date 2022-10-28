import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalAgendaManageComponent } from './professional-agenda-manage.component';

const routes: Routes = [
  { path: '', component: ProfessionalAgendaManageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalAgendaManageRoutingModule { }
