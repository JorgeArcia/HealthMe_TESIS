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
  tenantPick:any = null;
  specialitytPick:any = null;

  professional: any = null;
  tenantId: any = null;
  specialityId: any = null;
  specialistId: any = null;
  datePick: any = null;
  agendaId:any = null;
  agendaPick: any = null;

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
    this.tenantPick = this.tenants.filter((tenant: any) => tenant.id === parseInt(this.tenantId));
  }

  async onChangeSpeciality(event:any) {
    if(Number(event.target.value)) {
      this.specialityId = event.target.value;
      await this.listTenantProfessionalsBySpeciality();
    } else {
      this.specialityId = null;
    }
    this.specialitytPick = this.specialities.filter((spe:any) => spe.id === parseInt(this.specialityId))
  }

  async onChangeProfessional(event:any) {
    const specialistId = Number(event.target.value);
    if(specialistId) {
      this.specialistId = specialistId;
    } else {
      this.specialistId = null;
    }
    console.log(this.specialistId);
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
    const agendaPick = this.agendaPick;
    const tenantPick = this.tenantPick;
    const specialityPick = this.specialitytPick;
    this.professional = this.specialists.find((p:any) => newAppoint.professionalId === p.id);

    console.log(newAppoint.professionalId);

    Swal.fire({
      title: 'Quieres confirmar el turno',
      html: `<p>Consultorio: ${tenantPick[0].detail}</p> 
      <br><p>Direccion: ${tenantPick[0].address}</p> 
      <br> <p>profesional: ${this.professional.name} ${this.professional.surname} </p> 
      <br><p>Especialidad: ${specialityPick[0].detail}</p> 
      <br> <p>fecha: ${newAppoint.date}</p> 
      <br> <p>hora: ${agendaPick[0].hour.detail}</p> `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(newAppoint.professionalId);
        const {appointment}:any = await this.patientAppointmentsService.createAppointment(newAppoint);  
        if(appointment) {
          Swal.fire(
            'Turno registrado!',
            'Puedes ver tu turno en apartado Mis turnos',
            'success'
          )
          this.router.navigate(['patient', 'appointments'])
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error to create the appointment',
          })
          console.log(`Error to create the appointment`);
        }
      }
    });

  }

  async listAgendas() {
    const {agendas} : any = await this.patientAppointmentsService.readProfessionalAgendasByTenantAndDate({
      tenantId: this.tenantId,
      professionalId: this.specialistId,
    },{
      date: this.datePick,
    });
    this.agendas = agendas;
    console.log(agendas)
  }

  async assignAgenda(agendaId: any) {
    this.agendaId = agendaId;
    this.agendaPick = this.agendas.filter((p:any) => this.agendaId === p.id);
  }

}
