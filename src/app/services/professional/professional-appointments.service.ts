import { Injectable } from '@angular/core';

import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalAppointmentsService extends BaseService {

  readAppointments() {
    try {
      this.setEndpoint('professional/appointments');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

}
