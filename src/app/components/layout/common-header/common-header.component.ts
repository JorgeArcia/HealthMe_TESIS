import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {

  isLogged : boolean = false;
  routes: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    this.setRoutes();
  }
  setRoutes() {
    this.isLogged = false;
    this.routes = [
      { link: '/home', detail: 'Home' },
      { link: '/auth', detail: 'Patients' },
      { link: '/auth/prof', detail: 'Professionals' },
      { link: '/auth/oper', detail: 'Operators' },
      { link: '/auth/admin', detail: 'Administrators' },
    ];
  }
}
