import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PatientTenantsService } from '../../../../services/patient/patient-tenants.service';
import { PatientAppointmentsService } from '../../../../services/patient/patient-appointments.service';

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
  formCreate : any = { 
    date: '',
  };

  tenantId:any;
  specialityId:any;
  specialistId: any;

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
      console.log(this.specialityId);
      await this.listTenantProfessionalsBySpeciality();
    } else {
      this.specialityId = null;
    }
  }

  async onChangeProfessional(event:any) {
    if(Number(event.target.value)) {
      this.specialistId = event.target.value;
      console.log(this.specialistId);
      //
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
    console.log(this.specialists);
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

  async createAppointment() {
    const newAppoint = {
      tenantId: this.tenantId,
      professionalId: this.specialistId,
      date: this.form.value.date,
    }
    const {appointment}:any = await this.patientAppointmentsService.createAppointment(newAppoint);
    if(appointment) {
      this.router.navigate(['patient', 'appointments'])
    } else {
      console.log(`Error to create the appointment`);
    }
  }

}
