import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {
  
  private JWT : string | null = '' || null;
  isLogged : boolean = false;
  routes: any[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(){
    this.JWT = localStorage.getItem('JWT') ? localStorage.getItem('JWT') : null;
    if(this.JWT) {
      this.setLoggedRoutes();
    } else {
      this.setRoutes();
    }
  }

  private setLoggedRoutes() {
    this.isLogged = true;
    this.routes = [
      { link: '/home', detail: 'Home' },
      { link: '/auth', detail: 'Signin' },
      { link: '/auth/signup', detail: 'Signup' },
      { link: '/auth/panel', detail: 'Panel selector' },
    ];
  }
  
  private setRoutes() {
    this.isLogged = false;
    this.routes = [
      { link: '/home', detail: 'Home' },
      { link: '/auth', detail: 'Signin' },
      { link: '/auth/signup', detail: 'Signup' },
    ];
  } 

  logout() {
    this.isLogged = false;
    localStorage.clear();
    this.setRoutes();
    this.router.navigate(['home']);
  }

}
