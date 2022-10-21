import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/services/admin/users.service';
import { OperatorsService } from 'src/app/services/admin/operators.service';

@Component({
  selector: 'app-operators-form',
  templateUrl: './operators-form.component.html',
  styleUrls: ['./operators-form.component.css']
})
export class OperatorsFormComponent implements OnInit {

  users: any[] = [];

  constructor(
    private router: Router,
    private usersService : UsersService,
    private operatorsService : OperatorsService,
  ) { }

  ngOnInit(): void {
    this.readUsers();
  }

  private async readUsers() {
    const {ok,users}:any = await this.usersService.readUsers();
    this.users = users.map( (user:any) => {
      
      const isOperator = user.roles.find((r:any)=> r.id === 2);

      isOperator ?
        user.isOperator = true
        :
        user.isOperator = false;
      return user;
    });
  }

  async createUserAsOperator(userId:any) {
    const result:any = await this.operatorsService.createOperator({id:userId});
    this.router.navigate(['admin', 'operators']);
  }
}


