import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsListComponent } from './operators-list.component';

const routes: Routes = [
  { path: '', component: OperatorsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsListRoutingModule { }
