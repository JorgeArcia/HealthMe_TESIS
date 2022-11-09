import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TenantsService } from '../../../../services/admin/tenants.service';
import { ProfessionalsService } from '../../../../services/operator/professionals.service';
import Swal from 'sweetalert2';

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

  async linkProfessionalToTenantProfessionals(id: any,professionalName:any,professionalSurName:any) {

    Swal.fire({
      title: `Quieres vincular al tenant al professional ${professionalName} ${professionalSurName}`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        const result :any = await this.tenantsService.addTenantProfessional({
          professionalId: id,
          tenantId: this.reason,
        });
        this.router.navigate(['operator', 'tenants', `${this.reason}`, 'professionals']);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    // const result :any = await this.tenantsService.addTenantProfessional({
    //   professionalId: id,
    //   tenantId: this.reason,
    // });
    // this.router.navigate(['operator', 'tenants', `${this.reason}`, 'professionals']);
  }
}
