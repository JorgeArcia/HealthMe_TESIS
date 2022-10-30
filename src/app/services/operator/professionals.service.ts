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

  addProfessionalSpeciality(obj:any) {
    try {
      this.setEndpoint('operator/professionals/specialities');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }

  readProfessionalsSpecialities() {
    try {
      this.setEndpoint('operator/professionals/specialities');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  readProfessionalSpecialities(obj:any) {
    try {
      const { tenantId, professionalId } : any = obj;
      this.setEndpoint(`operator/tenants/${tenantId}/professionals/${professionalId}/specialities`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  removeProfessionalSpeciality(profSpecId:any) {
    try {
      this.setEndpoint(`operator/professionals/specialities/${profSpecId}`);
      return this.delete();
    } catch (error) {
      throw error;
    }
  }

}
