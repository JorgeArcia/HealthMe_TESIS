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

  readTenantOperators(id: any) {
    try {
      this.setEndpoint(`admin/tenants/${id}/operators`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  addTenantOperator(obj: any) {
    try {
      this.setEndpoint(`admin/tenants/operators/link`);
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }

  removeTenantOperator(tenantId:any, operatorId: any) {
    try {
      this.setEndpoint(`admin/tenants/${tenantId}/operators/${operatorId}/link`);
      return this.delete();
    } catch (error) {
      throw error;
    }
  }

  readTenantProfessionals(id: any) {
    try {
      this.setEndpoint(`operator/tenants/${id}/professionals`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  addTenantProfessional(obj: any) {
    try {
      this.setEndpoint(`operator/tenants/professionals/link`);
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }

  removeTenantProfessional(tenantId:any, professionalId: any) {
    try {
      this.setEndpoint(`operator/tenants/${tenantId}/professionals/${professionalId}/link`);
      return this.delete();
    } catch (error) {
      throw error;
    }
  }

}
