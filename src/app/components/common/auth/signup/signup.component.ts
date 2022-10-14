import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../services/common/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup | any;
  isLoaded : boolean = false;
  signupForm = {
    name: new FormControl('', [ Validators.required ]),
    surname: new FormControl('', [ Validators.required ]),
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
    this.form = new FormGroup(this.signupForm);
    this.isLoaded = true;
  }

  async signupUser() {
  
    const { user } : any = await this.service.signup(this.form.value) || undefined;

    if(typeof user !== undefined) {
      
      this.router.navigate(['auth',]).then(()=> {
        window.location.reload();
      });
    } else {
      console.log(`Error to create the user.`);
      //this.router.navigate(['auth']);
    }

    this.form.reset();

  }

}
