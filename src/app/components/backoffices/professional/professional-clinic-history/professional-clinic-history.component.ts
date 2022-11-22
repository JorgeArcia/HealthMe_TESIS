import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalTenantsClinicHistorysService } from 'src/app/services/professional/professional-tenants-clinic-historys.service';

import { ProfessionalAppointmentsService } from '../../../../services/professional/professional-appointments.service';
@Component({
  selector: 'app-professional-clinic-history',
  templateUrl: './professional-clinic-history.component.html',
  styleUrls: ['./professional-clinic-history.component.css']
})
export class ProfessionalClinicHistoryComponent implements OnInit {

  appointmentId:any;
  isLoaded : boolean = false;
  isNew : boolean = false;
  clinicHistory: any = {};
  form : any;
  formCreate : any = { 
    sintomas: '', 
    medicacion: '',
    observacion: '',
  };
  appointments:any = [];

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private ProfessionalTenantsClinicHistorysService: ProfessionalTenantsClinicHistorysService,
    private professionalAppointmentsService: ProfessionalAppointmentsService
  ) { }

  async ngOnInit(): Promise<void> {
    this.appointmentId = this.activatedRoute?.snapshot.params['appointmentId'];
    if(this.appointmentId !== undefined) {
      this.isNew = true;
      this.createForm(this.formCreate);
    } else {
      this.isNew = false;
      // await this.readClinicHistory(this.reason);
      this.createForm(this.clinicHistory);
    }
    this.listProfessionalAppointments();
  }

  async listProfessionalAppointments() {
    const {appointments} :any = await this.professionalAppointmentsService.readAppointments();
    this.appointments = appointments;
    this.appointments = this.appointments.filter((appt:any) => appt.id === parseInt(this.appointmentId))
    
  }

  createForm(obj:any) {
    this.form = new FormGroup({
      sintomas: new FormControl(obj.sintomas, [ Validators.required]),
      medicacion: new FormControl(obj.medicacion, [ Validators.required]),
      observacion: new FormControl(obj.observacion, [ Validators.required]),
    });
    this.isLoaded = !this.isLoaded;
  }

  private async readClinicHistory(id:any) {
    const {ok, message, data}:any  = await this.ProfessionalTenantsClinicHistorysService.readClinicHistory(id);
    if(!ok) {
      console.log(`Error to readTenant: ${message}`);
    }
    const {clinicHistory} = data;
    this.clinicHistory = clinicHistory;
  }

  async saveCliHistory() {
    // if(this.isNew) {
    //   await this.createTenant();
    // } else {
    //   await this.updateTenant();
    // }
    // this.router.navigate(['admin', 'tenants']);
  }


}
