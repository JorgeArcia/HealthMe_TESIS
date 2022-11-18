import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-professional-header',
  templateUrl: './professional-header.component.html',
  styleUrls: ['./professional-header.component.css']
})
export class ProfessionalHeaderComponent implements OnInit {

  private JWT: string| null = localStorage.getItem('JWT') ? localStorage.getItem('JWT') : null;
  isLogged : boolean = false;
  email: string | null = null;
  routes: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.JWT) {
      const { user } : any = jwt_decode(this.JWT);
      this.email = user.email;
      this.setRoutes();
    } else {
      this.logout();
    }
  }

  setRoutes() {
    this.isLogged = true;
    this.routes = [
      { link: '/auth/panel', detail: 'Lobby' },
      { link: '/professional/dashboard', detail: 'Dashboard' },
      // { link: '/professional/tenants', detail: 'Tenants' },
      { link: '/professional/appointments', detail: 'Appointments' },
      { link: '/professional/agenda', detail: 'Agenda' },
      // { link: '/professional/clinic_history', detail: 'Clinic History'},
    ];
  }

  logout() {
    localStorage.clear();
    this.isLogged = false;
    this.router.navigate(['home']);
  }

}
