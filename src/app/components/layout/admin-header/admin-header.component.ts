import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  private JWT: string| null = localStorage.getItem('JWT') ? localStorage.getItem('JWT') : null;
  isLogged : boolean = false;
  email: string | null = null;
  routes: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
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
      { link: '/auth/panel', detail: 'Panel' },
      { link: '/admin/dashboard', detail: 'Dashboard' },
      { link: '/admin/tenants', detail: 'Tenants' },
      { link: '/admin/operators', detail: 'Operators' },
    ];
  }

  logout() {
    localStorage.clear();
    this.isLogged = false;
    this.router.navigate(['home']);
  }

}
