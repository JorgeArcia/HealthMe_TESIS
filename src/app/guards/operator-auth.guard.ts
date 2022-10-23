import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class OperatorAuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
  ) {}

  canActivate() : boolean {
    const status = {
      token: localStorage.getItem('JWT') || null || '',
      res: false,
    }

    const {user} : any = jwt_decode(status.token);
    const roles =  user.roles;
    
    if(Array.isArray(roles)) {
      const operator = roles.find(operator => operator.id === 2);
      ( status.token && user &&  operator ) ? 
      status.res = true 
      : 
      status.res = false;
    } 
    
    if(user.roles.id >= 0) {
      const admin = user.roles;
      ( status.token && user &&  admin ) ? 
      status.res = true 
      : 
      status.res = false;
    }

    return status.res;
  }
  
}
