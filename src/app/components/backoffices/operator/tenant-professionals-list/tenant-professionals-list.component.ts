import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../../../../services/admin/users.service';
import { OperatorsService } from '../../../../services/admin/operators.service';

@Component({
  selector: 'app-tenant-professionals-list',
  templateUrl: './tenant-professionals-list.component.html',
  styleUrls: ['./tenant-professionals-list.component.css']
})
export class TenantProfessionalsListComponent implements OnInit {

  isLoaded: boolean = false;
  reason : string | null = null;
  users: any = [];
  form : any;
  formCreate : any = { 
    detail: '', 
    phone: '',
    cuit: '',
    address: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService : UsersService,
    private operatorsService : OperatorsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.reason = this.activatedRoute?.snapshot.params['tenantId'];
    this.users = await this.listUsers();
}

  private async listUsers() {
      const { ok, users } : any = await this.usersService.readUsers();

      return users.map( (u:any) => {
        
        const isOperator = u.roles.find((r:any)=> r.id === 2);

        isOperator ?
          u.isOperator = true
          :
          u.isOperator = false;

        return u;
      });
  }

  async createUserToOperators(id : any) {
    await this.operatorsService.createOperator({id});
  }

}
