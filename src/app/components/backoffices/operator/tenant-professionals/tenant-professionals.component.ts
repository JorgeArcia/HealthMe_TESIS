import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TenantsService } from '../../../../services/admin/tenants.service';
import Swal from 'sweetalert2';

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

  async unlinkTenantProfessional(professionalId:any,professionalName:any,professionalSurName:any) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: `Estas seguro que quieres desvincular a ${professionalName} ${professionalSurName}`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        const result : any = await this.tenantsService.removeTenantProfessional(this.reason, professionalId);
        this.readProfessionals();
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    // const result : any = await this.tenantsService.removeTenantProfessional(this.reason, professionalId);
    // this.readProfessionals();
  }

}
