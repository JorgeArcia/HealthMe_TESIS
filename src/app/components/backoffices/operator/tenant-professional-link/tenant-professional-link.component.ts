import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TenantsService } from '../../../../services/admin/tenants.service';
import { ProfessionalsService } from '../../../../services/operator/professionals.service';

@Component({
  selector: 'app-tenant-professional-link',
  templateUrl: './tenant-professional-link.component.html',
  styleUrls: ['./tenant-professional-link.component.css']
})
export class TenantProfessionalLinkComponent implements OnInit {

  reason : string | null = null;
  professionals: any = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private professionalsService : ProfessionalsService,
    private tenantsService : TenantsService,
  ) { }

  ngOnInit(): void {
    this.reason = this.activatedRoute?.snapshot.params['tenantId'];
    this.listProfessionals();
  }

  private async listProfessionals() {
    const { ok, professionals } : any = await this.professionalsService.readProfessionals();
    this.professionals = professionals;
  }

  async linkProfessionalToTenantProfessionals(id: any) {
    const result :any = await this.tenantsService.addTenantProfessional({
      professionalId: id,
      tenantId: this.reason,
    });
    this.router.navigate(['operator', 'tenants', `${this.reason}`, 'professionals']);
  }
}
