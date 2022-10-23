import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TenantsService } from '../../../../services/admin/tenants.service';
import { OperatorsService } from '../../../../services/admin/operators.service';

@Component({
  selector: 'app-tenant-operator-link',
  templateUrl: './tenant-operator-link.component.html',
  styleUrls: ['./tenant-operator-link.component.css']
})
export class TenantOperatorLinkComponent implements OnInit {

  isLoaded: boolean = false;
  reason : string | null = null;
  operators: any = [];
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private operatorsService : OperatorsService,
    private tenantsService : TenantsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.reason = this.activatedRoute?.snapshot.params['tenantId'];
    await this.listOperators();
  }

  private async listOperators() {
    const { ok, operators } : any = await this.operatorsService.readOperators();
    this.operators = operators;
  }

  async linkOperatorToTenantOperators(id: any) {
    const result :any = await this.tenantsService.addTenantOperator({
      operatorId: id,
      tenantId: this.reason,
    });
    this.router.navigate(['admin', 'tenants', `${this.reason}`, 'operators']);
  }


}
