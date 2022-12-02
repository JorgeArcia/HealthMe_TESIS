import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessionalsService } from '../../../../services/operator/professionals.service';

import { TenantsService } from '../../../../services/admin/tenants.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-tenant-professional-specialities',
  templateUrl: './tenant-professional-specialities.component.html',
  styleUrls: ['./tenant-professional-specialities.component.css']
})
export class TenantProfessionalSpecialitiesComponent implements OnInit {

  tenantId:any;
  professionalId:any;

  specialities: any = [];
  professionalSpecialities: any = []
  professionals: any[] = [];

  selectedSpeciality:any;
  professionalPick:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private professionalsService: ProfessionalsService,
    private tenantsService: TenantsService,
  ) { }

  ngOnInit(): void {
    this.tenantId = this.activatedRoute?.snapshot.params['tenantId'];
    this.professionalId = this.activatedRoute?.snapshot.params['professionalId'];
    this.readSpecialities();
    this.listProfessionalSpecialities();
    this.readProfessionals();
  }

  private async readProfessionals() {
    var profId = parseInt(this.professionalId);
    const {professionals}: any = await this.tenantsService.readTenantProfessionals(this.tenantId);
    this.professionals = professionals;
    this.professionals = this.professionals.filter((prof:any) => prof.id === profId);
    this.professionalPick = {
      id: this.professionals[0].id,
      name: this.professionals[0].name,
      surName: this.professionals[0].surname
    }
  }

  async readSpecialities() {
    const {specialities}:any = await this.professionalsService.readProfessionalsSpecialities();
    this.specialities = specialities;
  }

  async onChangeSpeciality(event:any) {
    if(Number(event.target.value)) {
      this.selectedSpeciality = event.target.value;
    } else {
      this.selectedSpeciality = null;
    }
  }

  async addSpeciality() {
    let speciality: string = this.selectedSpeciality
    let check: boolean = this.professionalSpecialities.find((ps:any) => ps.speciality.id === parseInt(speciality))

    if(this.selectedSpeciality !== null && typeof speciality !== "undefined" && !check) {
      const {specialist} = await this.professionalsService.addProfessionalSpeciality({
        tenantId: this.tenantId,
        professionalId: this.professionalId,
        specialityId: this.selectedSpeciality,
      });
      this.listProfessionalSpecialities();
    } else {
      console.log('Please select a speciality!');
    }
  }

  private async listProfessionalSpecialities() {
    const { specialities }:any = await this.professionalsService.readProfessionalSpecialities({
      tenantId: this.tenantId,
      professionalId: this.professionalId,
    });
    this.professionalSpecialities = specialities;
  }

  async removeSpeciality(profSpecId:any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro de remover la especialidad?',
      text: "No podras revertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Especialidad removida!',
          'La especialidad ha sido removida con exito',
          'success'
        )
        const {specialist} = await this.professionalsService.removeProfessionalSpeciality(profSpecId);
        await this.listProfessionalSpecialities();
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'No se removio especialidad del profesional',
          'error'
        )
      }
    })
  }

}
