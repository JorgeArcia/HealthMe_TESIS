import { Injectable } from '@angular/core';

import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class OperatorAgendasService extends BaseService {

  readAgendas() {
    try {
      this.setEndpoint('operator/agendas');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

}
