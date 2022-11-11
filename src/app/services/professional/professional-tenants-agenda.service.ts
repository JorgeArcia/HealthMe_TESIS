import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalTenantsAgendaService extends BaseService{

  readAgendas() {
    try {
      this.setEndpoint('professional/agendas');
      return this.get();
    } catch (error) {
      throw error;
    }
  }
}
