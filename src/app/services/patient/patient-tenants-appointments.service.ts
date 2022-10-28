import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class PatientTenantsAppointmentsService extends BaseService{

  readAppointments() {
    try {
      this.setEndpoint('patient/tenants/appointments');
      return this.get();
    } catch (error) {
      throw error;
    }
  }
}
