import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../../../services/admin/users.service';
import { ProfessionalsService } from '../../../../services/operator/professionals.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-professionals-form',
  templateUrl: './professionals-form.component.html',
  styleUrls: ['./professionals-form.component.css']
})
export class ProfessionalsFormComponent implements OnInit {

  users: any[] = [];

  constructor(
    private router: Router,
    private usersService : UsersService,
    private professionalsService : ProfessionalsService,
  ) { }

  ngOnInit(): void {
    this.readUsers();
  }

  private async readUsers() {
    const {ok,users}:any = await this.usersService.readUsers();
    this.users = users.map( (user:any) => {
      
      const isProfessional = user.roles.find((r:any)=> r.id === 3);

      isProfessional ?
        user.isProfessional = true
        :
        user.isProfessional = false;
      return user;
    });
  }

  async createUserAsProfessional(userId:any,userName:any,userSurName:any) {
    Swal.fire({
      title: `Quieres asigarle el rol de profesional a ${userName} ${userSurName}`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire('Rol asignado!', '', 'success')
        const result:any = await this.professionalsService.createProfessional({id:userId});
        this.router.navigate(['operator', 'professionals']);
      } else if (result.isDenied) {
        Swal.fire('No se efecuaron los cambios', '', 'info')
      }
    })
  }

}
