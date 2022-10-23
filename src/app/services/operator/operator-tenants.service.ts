import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class OperatorTenantsService extends BaseService {

  readTenants() {
    try {
      this.setEndpoint('operator/tenants');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

}
