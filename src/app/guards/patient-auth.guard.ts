import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PatientAuthGuard implements CanActivate {
  
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

    const user : any = jwt_decode(status.token);
    const patient = user.roles.find( (patient: any) => patient.id === 4 && patient.available === true ) || null;
    
    ( status.token && user &&  patient ) ? 
      status.res = true 
      : 
      status.res = false;

    return status.res;
  }
  
}
