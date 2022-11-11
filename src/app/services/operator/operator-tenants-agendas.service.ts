import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class OperatorTenantsAgendasService extends BaseService{

  generateAgenda(obj:any) {
    try {
      this.setEndpoint('operator/agendas');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }

  switchEnableAgenda(agendaId:any) {
    try {
      this.setEndpoint(`operator/agendas/status`);
      return this.post({agendaId});
    } catch (error) {
      throw error;
    }
  }

  readAgendas(tenantId:any, professionalId:any) {
    try {
      this.setEndpoint(`operator/agendas/${tenantId}/${professionalId}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }
  
}
