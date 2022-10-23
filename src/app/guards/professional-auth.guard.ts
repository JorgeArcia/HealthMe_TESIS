import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalAuthGuard implements CanActivate {
  
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
    const professional = user.roles.find( (professional: any) => professional.id === 3 && professional.available === true ) || null;

    ( status.token && user &&  professional ) ? 
      status.res = true 
      : 
      status.res = false;

    return status.res;
  }
  
}
