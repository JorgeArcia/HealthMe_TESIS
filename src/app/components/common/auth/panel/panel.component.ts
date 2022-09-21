import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  private JWT : string | null = localStorage.getItem('JWT')? localStorage.getItem('JWT') : null;
  isLogged : boolean = false;
  email: string | null = null;
  routes: any[] = [];
  roles: any[]= [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(!this.JWT) {
      localStorage.clear();
      this.router.navigate(['home']);
    }
    const { user } : any = jwt_decode(this.JWT ? this.JWT : '');
    this.setRoutes();
    this.setRoles(user.roles);
  }

  private setRoutes() {
    this.routes = [
      { id: 1, link: ['admin', 'dashboard'], detail: 'Admin'},
      { id: 2, link: ['operator', 'dashboard'], detail: 'Operator'},
      { id: 3, link: ['professional', 'dashboard'], detail: 'Professional' },
      { id: 4, link: ['patient', 'dashboard'], detail: 'Patient' }
    ];
  }

  private setRoles(roles: any[]) {
    this.routes = this.filterByRoles(roles);
  }

  private filterByRoles(roles:any[]): any[] {
    let result : any[] = [];
    for (const role of roles) {
      for (const route of this.routes) {
        if(role.id == route.id) {
          result.push(route);
        }
      }
    }
    return result;
  }

  linkTo(linkRoute: any[]) {
    this.router.navigate(linkRoute);
  }

  logout() {
    localStorage.clear();
    this.isLogged = false;
    this.router.navigate(['home']);
  }

}