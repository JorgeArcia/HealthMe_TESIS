import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalTenantsClinicHistorysService extends BaseService{

  readClinicHistory(id: any) {
    try {
      this.setEndpoint(`patient/tenants/clihistory/${id}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  readClinicsHistorys() {
    try {
      this.setEndpoint('professional/tenants/clihistorys');
      return this.get();
    } catch (error) {
      throw error;
    }
  }
}
