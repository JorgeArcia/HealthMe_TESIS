import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/common/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup | any;
  isLoaded : boolean = false;
  signinForm = {
    email: new FormControl('', [ Validators.email, Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
  }

  constructor(
    private service: AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.isLoaded = false;
    this.form = new FormGroup(this.signinForm);
    this.isLoaded = true;
  }

  async signinUser() {
    const { token: JWT } : any = await this.service.authenticate(this.form.value);
    const { roles } : any = jwt_decode(JWT);
    
    JWT && Array.isArray(roles) && roles.length > 0 ? (localStorage.setItem('JWT', JWT), this.router.navigate(['admin', 'panels',])) : this.form.reset();
  }
  

}
