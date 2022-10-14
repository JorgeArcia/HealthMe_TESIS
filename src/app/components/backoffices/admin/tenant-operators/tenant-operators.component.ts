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
  tenant: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private tenantsService : TenantsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.reason = this.activatedRoute?.snapshot.params['tenantId'];
    const {tenant}: any = await this.tenantsService.readTenantOperators(this.reason);
    this.tenant = tenant;
  }
}
