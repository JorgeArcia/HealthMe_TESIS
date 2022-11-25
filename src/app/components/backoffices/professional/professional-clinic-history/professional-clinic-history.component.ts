import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfessionalTenantsClinicHistorysService } from '../../../../services/professional/professional-tenants-clinic-historys.service';
import { ProfessionalAppointmentsService } from '../../../../services/professional/professional-appointments.service';

@Component({
  selector: 'app-professional-clinic-history',
  templateUrl: './professional-clinic-history.component.html',
  styleUrls: ['./professional-clinic-history.component.css']
})
export class ProfessionalClinicHistoryComponent implements OnInit {

  historyId:any;
  isLoaded : boolean = false;
  appointment:any = {};

  form : any;
  formCreate : any = { 
    symptoms: '', 
    medications: '',
    observations: '',
  };
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private professionalTenantsClinicHistorysService: ProfessionalTenantsClinicHistorysService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.historyId = this.activatedRoute?.snapshot.params['historyId'];
    await this.readClinicHistory(this.historyId);
    console.log(this.appointment);
    const {history}:any = this.appointment;
    this.createForm({
      symptoms: history.symptoms,
      medications: history.medications,
      observations: history.observations,
    });
  }

  createForm(obj:any) {
    this.form = new FormGroup({
      symptoms: new FormControl(obj.symptoms, [ Validators.required]),
      medications: new FormControl(obj.medications, [ Validators.required]),
      observations: new FormControl(obj.observations, [ Validators.required]),
    });
    this.isLoaded = !this.isLoaded;
  }

  private async readClinicHistory(id:any) {
    const {ok, appointment}:any  = await this.professionalTenantsClinicHistorysService.readClinicHistory(id);
    if(!ok) {
      console.log(`Error to read historyId: ${id}`);
    }
    this.appointment = appointment;
  }

  async saveCliHistory() {
    const history = {
      id: this.appointment.history.id,
      ...this.form.value,
    }
    console.log(history);
    const result : any = await this.professionalTenantsClinicHistorysService.updateClinicHistory(history.id, history);
  }


}
