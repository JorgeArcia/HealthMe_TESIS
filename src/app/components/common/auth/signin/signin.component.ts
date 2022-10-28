import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/common/auth.service';

import Swal from 'sweetalert2';
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
  
    const { ok, user, token } : any = await this.service.authenticate(this.form.value);

    if(ok) {
      localStorage.setItem('JWT', token);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Bienvenido al sistema ${user.name} ${user.surname}`,
        showConfirmButton: false,
        timer: 1000
      })
      this.router.navigate(['auth', 'panel']).then(()=> {
        setTimeout(() => {
          window.location.reload();
        }, 900);
      });
    } else {
      localStorage.clear();
      this.router.navigate(['auth']);
    }

    this.form.reset();

  }
  

}
