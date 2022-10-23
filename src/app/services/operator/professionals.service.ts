import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService extends BaseService {

  createProfessional(obj:any) {
    try {
      this.setEndpoint('operator/professionals');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }

  readProfessionals() {
    try {
      this.setEndpoint('operator/professionals');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

}
