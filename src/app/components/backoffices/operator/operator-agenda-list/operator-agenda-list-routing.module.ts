import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorAgendaListComponent } from './operator-agenda-list.component';


const routes: Routes = [
  { path: '', component:OperatorAgendaListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorAgendaListRoutingModule { }
