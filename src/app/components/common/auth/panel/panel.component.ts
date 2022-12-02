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
      { id: 1, link: ['admin', 'dashboard'], img:'https://us.123rf.com/450wm/ahasoft2000/ahasoft20001607/ahasoft2000160700035/60449629-icono-del-personal-estilo-vector-es-s%C3%ADmbolo-ic%C3%B3nico-plana-con-%C3%A1ngulos-redondeados-de-color-gris-fond.jpg?ver=6' , title:'Administrador' , text:'Ingresar para crear consultorios/alta operadores/asociar operadores a consultorios'},
      { id: 2, link: ['operator', 'dashboard'] , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjTotIksoKCrOn3HZBVZVc2NLloBiWF5I6Xd1JJfOVqR_0A5TdYrk0b8ydUaeacctiCY&usqp=CAU' , title:'Operador' , text:'Ingresar para alta profesionales/asociar profesionales a consultorios/gestionar agenda/gestionar turnos'},
      { id: 3, link: ['professional', 'dashboard'] , img:'https://thumbs.dreamstime.com/b/medical-doctor-consultant-icon-editable-vector-eps-symbol-illustration-194020693.jpg' , title:'Profesional' , text:'Ingresa para ver Turnos agendados/Completar historias clinicas/ver agenda personal'},
      { id: 4, link: ['patient', 'dashboard'] , img:'https://thumbs.dreamstime.com/b/health-icon-vector-male-person-profile-avatar-symbol-patient-medical-treatment-flat-color-glyph-pictogram-illustration-146789639.jpg' , title:'Paciente' , text:'Ingresa para ver tus turnos medicos/Ver historia clinica/Agendar turnos nuevos/eliminar turnos no deseados'}
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
