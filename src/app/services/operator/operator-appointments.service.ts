import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class OperatorAppointmentsService extends BaseService {
  
  readAppointments() {
    try {
      this.setEndpoint('operator/appointments');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  deleteAppointment(id:any) {
    try {
      this.setEndpoint(`operator/appointments/${id}`);
      return this.delete();
    } catch (error) {
      throw error;
    }
  }

}
