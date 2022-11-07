import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantsService } from '../../../../services/admin/tenants.service';
import Swal from 'sweetalert2';

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

  async unlinkTenantOperator(operatorId:any,operatorName:any,operatorSurName:any) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: `Estas seguro que quieres desvincular a ${operatorName} ${operatorSurName}`,
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
        const { ok, tenant, operator} : any = await this.tenantsService.removeTenantOperator(this.reason, operatorId);
        this.listOperators();
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
    // const { ok, tenant, operator} : any = await this.tenantsService.removeTenantOperator(this.reason, operatorId);
    // this.listOperators();
  }
}
