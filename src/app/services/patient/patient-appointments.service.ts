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

  readProfessionalAgendasByTenantAndDate({tenantId, professionalId}:any, {date}:any) {
    try {
      this.setEndpoint(`patient/appointments/agendas/${tenantId}/${professionalId}?date=${date}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  readAppointments() {
    try {
      this.setEndpoint('patient/appointments');
      return this.get();
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
