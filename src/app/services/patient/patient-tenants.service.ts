import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class PatientTenantsService extends BaseService{

  readTenants() {
    try {
      this.setEndpoint('patient/tenants');
      return this.get();
    } catch (error) {
      throw error;
    }
  }
}
