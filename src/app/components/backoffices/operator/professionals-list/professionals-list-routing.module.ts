import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalsListComponent } from './professionals-list.component';

const routes: Routes = [
  {path: '', component: ProfessionalsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsListRoutingModule { }
