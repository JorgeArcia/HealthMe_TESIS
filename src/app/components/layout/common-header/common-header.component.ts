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
  routesNavBar: any[] = [];
  routesSignin: any[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(){
    this.JWT = localStorage.getItem('JWT') ? localStorage.getItem('JWT') : null;
    if(this.JWT) {
      this.isLogged = true;
    } 
    this.setRoutes();
  }

  private setRoutes() {
    this.routesNavBar = [
      // { link: '/home', detail: 'Home' },

    ];
    this.routesSignin = [
      { link: '/auth', detail: 'Sign in' },
      { link: '/signup', detail: 'Sign up' },
    ];
  } 

  logout() {
    this.isLogged = false;
    localStorage.clear();
    this.router.navigate(['home']);
  }

}
