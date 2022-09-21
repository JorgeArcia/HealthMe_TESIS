import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
  ) {}

  canActivate() : boolean {
    const status = {
      token: localStorage.getItem('JWT') || null || '',
      res: false,
    }

    if(status.token === null) status.res = false;
    status.token ? status.res = true : status.res = false;

    const {user} : any = jwt_decode(status.token);
    const roles =  user.roles
    
    if(!Array.isArray(roles)) {
      status.res = false;
    } else {
      status.res = true;
    }

    return status.res;
  }
  
}
