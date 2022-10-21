import { Component, OnInit } from '@angular/core';

import { TenantsService } from '../../../../services/admin/tenants.service';

@Component({
  selector: 'app-operator-tenants-list',
  templateUrl: './operator-tenants-list.component.html',
  styleUrls: ['./operator-tenants-list.component.css']
})
export class OperatorTenantsListComponent implements OnInit {

  tenants: any[] = [];

  constructor(
    private tenantsService : TenantsService,
  ) { }

  ngOnInit(): void {
    this.readTenants();
  }

  private async readTenants() {
    const {ok,data}:any = await this.tenantsService.readTenants();
    if(!ok) {
      console.log(`Tenants not found.`);
    }
    const { tenants } = data;
    this.tenants = tenants;
  }


}
