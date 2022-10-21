import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TenantProfessionalsComponent } from './tenant-professionals.component';

const routes: Routes = [
  { path: '', component: TenantProfessionalsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantProfessionalsRoutingModule { }
