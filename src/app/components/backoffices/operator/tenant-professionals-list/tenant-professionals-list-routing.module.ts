import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TenantProfessionalsListComponent } from './tenant-professionals-list.component';

const routes: Routes = [
  { path: '', component: TenantProfessionalsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantProfessionalsListRoutingModule { }
