import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorAgendaListManageComponent } from '../operator-agenda-list-manage/operator-agenda-list-manage.component';

const routes: Routes = [
  { path: '', component: OperatorAgendaListManageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorAgendaListManageRoutingModule { }
