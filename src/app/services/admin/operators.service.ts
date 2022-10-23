import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService extends BaseService {

  createOperator(obj:any) {
    try {
      this.setEndpoint('admin/operators');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }

  readOperators() {
    try {
      this.setEndpoint('admin/operators');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  readOperator(id: any) {
    try {
      this.setEndpoint(`admin/operators/${id}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  updateOperator(id:any, obj:any) {
    try {
      this.setEndpoint(`admin/operators/${id}`);
      return this.put(obj);
    } catch (error) {
      throw error;
    }
  }

  deleteOperator(id:any) {
    try {
      this.setEndpoint(`admin/operators/${id}`);
      return this.delete();
    } catch (error) {
      throw error;
    }
  }
}
