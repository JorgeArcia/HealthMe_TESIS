import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TenantsService } from '../../../../services/admin/tenants.service';

@Component({
  selector: 'app-tenant-professionals',
  templateUrl: './tenant-professionals.component.html',
  styleUrls: ['./tenant-professionals.component.css']
})
export class TenantProfessionalsComponent implements OnInit {
  
  reason : string | null = null;
  professionals: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tenantsService: TenantsService,
  ) { }

  ngOnInit(): void {
    this.reason = this.activatedRoute?.snapshot.params['tenantId'];
    this.readProfessionals();
  }

  private async readProfessionals() {
    const {professionals}: any = await this.tenantsService.readTenantProfessionals(this.reason);
    this.professionals = professionals;
  }

  async unlinkTenantProfessional(professionalId:any) {
    const result : any = await this.tenantsService.removeTenantProfessional(this.reason, professionalId);
    this.readProfessionals();
  }

}
