import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class PatientTenantsClinicHistorysService extends BaseService{

  readPatientHistory(id: any) {
    try {
      this.setEndpoint(`patient/histories/${id}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

}
