import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  authenticate(obj : any) {
    try {
      this.setEndpoint('auth');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }

}
