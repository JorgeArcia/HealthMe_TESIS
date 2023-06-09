import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.css']
})
export class PatientHeaderComponent implements OnInit {

  private JWT: string| null = localStorage.getItem('JWT') ? localStorage.getItem('JWT') : null;
  isLogged : boolean = false;
  email: string | null = null;
  routes: any;
  user: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.JWT) {
      const { user } : any = jwt_decode(this.JWT);
      this.email = user.email;
      this.user = user;
      this.setRoutes();
    } else {
      this.logout();
    }
  }

  setRoutes() {
    this.isLogged = true;
    this.routes = [
      { link: '/auth/panel', detail: 'Panel' },
      { link: '/patient/dashboard', detail: 'Inicio' },
      { link: '/patient/appointments', detail: 'Mis turnos' },
    ];
  }

  logout() {
    localStorage.clear();
    this.isLogged = false;
    this.router.navigate(['home']);
  }

}
