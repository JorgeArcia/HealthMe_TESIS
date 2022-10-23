import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalTenantsService extends BaseService {

  readTenants() {
    try {
      this.setEndpoint('professional/tenants');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

}
