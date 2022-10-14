import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantOperatorsComponent } from './tenant-operators.component';

const routes: Routes = [
  { path: '', component: TenantOperatorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantOperatorsRoutingModule { }
