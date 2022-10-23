import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalsFormComponent } from './professionals-form.component';

const routes: Routes = [
  {path:'', component: ProfessionalsFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsFormRoutingModule { }
