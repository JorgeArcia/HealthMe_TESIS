import { Component, OnInit } from '@angular/core';
import { TenantsService } from '../../../../services/admin/tenants.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.css']
})
export class TenantsListComponent implements OnInit {

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

  async deleteTenant(id: any) {
    Swal.fire({
      title: 'Estas seguro de eliminar el consultorio?',
      text: "Todos los datos asociados al consultorio seran eliminados, no podras revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const {ok, message, data}:any = await this.tenantsService.deleteTenant(id);
        console.log(message);
        if(!ok) {
          console.log(`${message}`);
          console.log(`Tenants couldn't delete.`);
        }
        const { tenant } = data;
        this.readTenants();
        Swal.fire(
          'Eliminado!',
          'Consultorio eliminado con exito.',
          'success'
        )
      }
    })
  }

}
