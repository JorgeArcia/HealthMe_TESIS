import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {

  readUsers() {
    try {
      this.setEndpoint('users');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

}
