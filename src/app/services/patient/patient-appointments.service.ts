import { Injectable } from '@angular/core';

import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class PatientAppointmentsService extends BaseService{

  createAppointment(obj:any) {
    try {
      this.setEndpoint('patient/appointments');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }

  deleteAppointment(id:any) {
    try {
      this.setEndpoint(`patient/appointments/${id}`);
      return this.delete();
    } catch (error) {
      throw error;
    }
  }

}
