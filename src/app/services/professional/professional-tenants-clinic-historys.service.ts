import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalTenantsClinicHistorysService extends BaseService{

  readClinicHistory(id: any) {
    try {
      this.setEndpoint(`professional/histories/${id}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  updateClinicHistory(id: any, obj:any) {
    try {
      this.setEndpoint(`professional/histories/${id}`);
      return this.put(obj);
    } catch (error) {
      throw error;
    }
  }
}
