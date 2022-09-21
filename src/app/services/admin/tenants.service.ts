import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class TenantsService extends BaseService {

  createTenant(obj:any) {
    try {
      this.setEndpoint('admin/tenants');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }

  readTenants() {
    try {
      this.setEndpoint('admin/tenants');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  readTenant(id: any) {
    try {
      this.setEndpoint(`admin/tenants/${id}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  updateTenant(id:any, obj:any) {
    try {
      this.setEndpoint(`admin/tenants/${id}`);
      return this.put(obj);
    } catch (error) {
      throw error;
    }
  }

  deleteTenant(id:any) {
    try {
      this.setEndpoint(`admin/tenants/${id}`);
      return this.delete();
    } catch (error) {
      throw error;
    }
  }

}
