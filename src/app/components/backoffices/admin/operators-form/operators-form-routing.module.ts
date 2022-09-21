import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsFormComponent } from './operators-form.component';

const routes: Routes = [
  { path: '', component: OperatorsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsFormRoutingModule { }
