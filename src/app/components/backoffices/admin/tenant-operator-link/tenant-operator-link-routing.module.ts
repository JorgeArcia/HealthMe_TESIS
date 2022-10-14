import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantOperatorLinkComponent } from './tenant-operator-link.component';

const routes: Routes = [
  {path: '', component: TenantOperatorLinkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantOperatorLinkRoutingModule { }
