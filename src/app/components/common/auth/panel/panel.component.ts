import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { AuthService } from '../../../../services/common/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  private JWT : string | null = localStorage.getItem('JWT')? localStorage.getItem('JWT') : null;
  isLogged : boolean = false;
  user: any = {};
  routes: any[] = [];
  roles: any[]= [];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(!this.JWT) {
      localStorage.clear();
      this.router.navigate(['home']);
    }
    this.startLobby();
    this.setRoutes();
  }

  private async startLobby() {
    const { token, user }:any = await this.authService.lobby();
    localStorage.setItem('JWT', token);
    this.user = user;
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
    this.router.navigate(['home']).then(()=> {
      window.location.reload();
    });;
  }

}
