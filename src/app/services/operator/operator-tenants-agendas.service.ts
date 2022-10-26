import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class OperatorTenantsAgendasService extends BaseService{

  readAgendas() {
    try {
      this.setEndpoint('operator/tenants/agendas');
      return this.get();
    } catch (error) {
      throw error;
    }
  }
  
}
