import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfessionalTenantsClinicHistorysService } from '../../../../services/professional/professional-tenants-clinic-historys.service';
import { ProfessionalAppointmentsService } from '../../../../services/professional/professional-appointments.service';
import Swal from 'sweetalert2';
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
    private router: Router,
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
    if (!this.appointment.agenda.enable) {
      this.form.get('symptoms')?.disable();
      this.form.get('medications')?.disable();
      this.form.get('observations')?.disable();
    }
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
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const result : any = await this.professionalTenantsClinicHistorysService.updateClinicHistory(history.id, history);
        if (result) {
          Swal.fire(
            'Historia Clinica guardada con exito',
            'Puedes ver el detalle de la historia clinica',
            'success'
          )
          this.router.navigate(['professional', 'appointments'])
        }
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    // const result : any = await this.professionalTenantsClinicHistorysService.updateClinicHistory(history.id, history);
  }


}
