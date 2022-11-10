import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientTenantsService } from '../../../../services/patient/patient-tenants.service';
import { PatientAppointmentsService } from '../../../../services/patient/patient-appointments.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-appointment-form',
  templateUrl: './patient-appointment-form.component.html',
  styleUrls: ['./patient-appointment-form.component.css']
})
export class PatientAppointmentFormComponent implements OnInit {

  isLoaded : boolean = false;
  form:any;
  tenants: any = [];
  specialities:any = [];
  specialists:any = [];
  agendas:any = [];
  formCreate : any = { 
    date: '',
  };

  professional: any;
  tenantId:any;
  specialityId:any;
  specialistId: any;
  datePick: any;
  agendaId:any;

  constructor(
    private router: Router,
    private patientTenantsService: PatientTenantsService,
    private patientAppointmentsService: PatientAppointmentsService
  ) { }

  ngOnInit(): void {
    this.listPatientTenants();
    this.createForm(this.formCreate);
  }

  createForm(obj:any) {
    this.form = new FormGroup({
      date: new FormControl(obj.date, [ Validators.required]),
    });
    this.isLoaded = !this.isLoaded;
  }

  async listPatientTenants() {
    const { tenants } : any = await this.patientTenantsService.readAllTenants();
    this.tenants = tenants;
  }

  async onChangeTenant(event:any) {
    if(Number(event.target.value)) {
      this.tenantId = event.target.value;
      await this.listTenantSpecialities();
    } else {
      this.tenantId = null;
    }
  }

  async onChangeSpeciality(event:any) {
    if(Number(event.target.value)) {
      this.specialityId = event.target.value;
      await this.listTenantProfessionalsBySpeciality();
    } else {
      this.specialityId = null;
    }
  }

  async onChangeProfessional(event:any) {
    if(Number(event.target.value)) {
      this.specialistId = event.target.value;
    } else {
      this.specialistId = null;
    }
  }

  async listTenantSpecialities() {
    const { specialities } : any = await this.patientTenantsService.readTenantSpecialities(this.tenantId);
    this.specialities = specialities;
    this.specialities = this.filterDuplicatedSpecialities();
  }

  async listTenantProfessionalsBySpeciality() {
    const { specialists } : any = await this.patientTenantsService.readTenantProfessionalsBySpeciality(this.tenantId, this.specialityId);
    this.specialists = specialists.map((spe:any) => {
      return spe.user;
    });
  }

  filterDuplicatedSpecialities() {
    const uniqueIds = new Set();

    const unique = this.specialities.filter((element:any) => {
      const isDuplicate = uniqueIds.has(element.speciality.id);

      uniqueIds.add(element.speciality.id);

      if (!isDuplicate) {
        return true;
      }

      return false;
    });

    return unique.map((spe:any) => {
      return spe.speciality;
    });
  }

  onPickDate() {
    if (this.form.value.date) {
      this.datePick = this.form.value.date;
      this.listAgendas();
    }
  }

  async createAppointment() {
    const newAppoint = {
      tenantId: this.tenantId,
      professionalId: this.specialistId,
      date: this.form.value.date,
      agendaId: this.agendaId,
    }

    this.professional = this.specialists.find((p:any) => newAppoint.professionalId = p.id);
    console.log(this.professional);
    Swal.fire({
      title: 'Quieres confirmar el turno',
      text: `en el Tenant ${newAppoint.tenantId} con el profesional ${newAppoint.professionalId} fecha y hora: ${newAppoint.date}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then(async (result) => {
      if (result.isConfirmed) {
      const {appointment}:any = await this.patientAppointmentsService.createAppointment(newAppoint);  
        if(appointment) {
          Swal.fire(
            'Turno registrado!',
            'Puedes ver tu turno en apartado Appointments',
            'success'
          )
          this.router.navigate(['patient', 'appointments'])
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
          console.log(`Error to create the appointment`);
        }
      }
    });
  }

  async listAgendas() {
    const {agendas} : any = await this.patientAppointmentsService.readProfessionalAgendasByTenantAndDate({
      tenantId: this.tenantId,
      professionalId: 1,
    },{
      date: this.datePick,
    });
    this.agendas = agendas;
    console.log(agendas)
  }

  async assignAgenda(agendaId: any) {
    this.agendaId = agendaId;
  }

}
