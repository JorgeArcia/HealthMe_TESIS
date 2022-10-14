import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OperatorsService } from '../../../../services/admin/operators.service';

@Component({
  selector: 'app-operators-form',
  templateUrl: './operators-form.component.html',
  styleUrls: ['./operators-form.component.css']
})
export class OperatorsFormComponent implements OnInit {

  reason : string | null = null;
  isLoaded : boolean = false;
  isNew : boolean = false;
  operator: any = {};
  form : any;
  formCreate : any = { 
    firstName: '', 
    lastName: '',
    phone: '',
    password: '',
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private operatorsService : OperatorsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.reason = this.activatedRoute?.snapshot.params['id'];
    if (this.reason === 'new') {
      this.isNew = true;
      this.createForm(this.formCreate)
    } else {
      this.isNew = false;
      await this.readOperator(this.reason);
      this.createForm(this.operator);
    }
  }

  createForm(obj:any) {
    this.form = new FormGroup({
      firstName: new FormControl(obj.firstName, [ Validators.required]),
      lastName: new FormControl(obj.lastName, [ Validators.required]),
      phone: new FormControl(obj.phone, [ Validators.required]),
      password: new FormControl(obj.password, [ Validators.required]),
      password2: new FormControl(obj.password, [ Validators.required]),
    });
    this.isLoaded = !this.isLoaded;
  }

  private async readOperator(id: any){
    const {ok,message,data}:any = await this.operatorsService.readOperator(id);
    if (!ok) {
      console.log(`Error to readOperator: ${message}`);
    }
    const {operator} = data;
    this.operator = operator;
  }

  private async createOperator() {
    const {ok,message,data} : any = await this.operatorsService.createOperator(this.form.value);
    if (!ok) {
      console.log(`Error to createOperator ${message}`);
    }
    const {operator} : any = data;
  }

  private async updateOperator() {
    const {ok,message,data} : any = await this.operatorsService.updateOperator(this.reason,this.form.value);
    if (!ok) {
      console.log(`Error to updateOperator ${message}`);
    }
    const {operator} : any = data;
  }

  async saveOperator() {
    if (this.isNew) {
      await this.createOperator();
    } else {
      await this.updateOperator();
    }
    this.router.navigate(['admin','operators'])
  }

}
