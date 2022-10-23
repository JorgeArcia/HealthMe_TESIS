import { Component, OnInit } from '@angular/core';

import { OperatorTenantsService } from '../../../../services/operator/operator-tenants.service';

@Component({
  selector: 'app-operator-tenants-list',
  templateUrl: './operator-tenants-list.component.html',
  styleUrls: ['./operator-tenants-list.component.css']
})
export class OperatorTenantsListComponent implements OnInit {

  tenants: any[] = [];

  constructor(
    private operatorTenantsService : OperatorTenantsService,
  ) { }

  ngOnInit(): void {
    this.readTenants();
  }

  private async readTenants() {
    const {tenants}:any = await this.operatorTenantsService.readTenants();
    this.tenants = tenants;
  }


}
