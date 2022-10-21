import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantsService } from '../../../../services/admin/tenants.service';

@Component({
  selector: 'app-tenant-operators',
  templateUrl: './tenant-operators.component.html',
  styleUrls: ['./tenant-operators.component.css']
})
export class TenantOperatorsComponent implements OnInit {

  reason : string | null = null;
  operators: any = [];

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private tenantsService : TenantsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.reason = this.activatedRoute?.snapshot.params['tenantId'];
    this.listOperators();
  }

  private async listOperators() {
    const {operators}: any = await this.tenantsService.readTenantOperators(this.reason);
    this.operators = operators;
  }

  async unlinkTenantOperator(operatorId:any) {
    const { ok, tenant, operator} : any = await this.tenantsService.removeTenantOperator(this.reason, operatorId);
    this.listOperators();
  }
}
