import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class PatientTenantsService extends BaseService{

  readAllTenants() {
    try {
      this.setEndpoint('patient/tenants/all');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  readTenantSpecialities(tenantId:any) {
    try {
      this.setEndpoint(`patient/tenants/${tenantId}/specialities`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  readTenantProfessionalsBySpeciality(tenantId:any, specialityId:any) {
    try {
      this.setEndpoint(`patient/tenants/${tenantId}/professionals/specialities/${specialityId}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

}
