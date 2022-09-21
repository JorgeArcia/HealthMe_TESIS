import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantsService } from '../../../../services/admin/tenants.service';

@Component({
  selector: 'app-tenants-form',
  templateUrl: './tenants-form.component.html',
  styleUrls: ['./tenants-form.component.css']
})
export class TenantsFormComponent implements OnInit {

  reason : string | null = null;
  isLoaded : boolean = false;
  isNew : boolean = false;
  tenant: any = {};
  form : any;
  formCreate : any = { 
    detail: '', 
    phone: '',
    cuit: '',
    address: '',
  };
  //isLoaded : boolean;

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private tenantsService : TenantsService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.reason = this.activatedRoute?.snapshot.params['id'];
    if(this.reason === 'new') {
      this.isNew = true;
      this.createForm(this.formCreate);
    } else {
      this.isNew = false;
      await this.readTenant(this.reason);
      this.createForm(this.tenant);
    }
  }

  createForm(obj:any) {
    this.form = new FormGroup({
      detail: new FormControl(obj.detail, [ Validators.required]),
      phone: new FormControl(obj.phone, [ Validators.required]),
      cuit: new FormControl(obj.cuit, [ Validators.required]),
      address: new FormControl(obj.address, [ Validators.required]),
    });
    this.isLoaded = !this.isLoaded;
  }

  private async readTenant(id:any) {
    const {ok, message, data}:any  = await this.tenantsService.readTenant(id);
    if(!ok) {
      console.log(`Error to readTenant: ${message}`);
    }
    const {tenant} = data;
    this.tenant = tenant;
  }

  private async createTenant() {
    const { ok, message, data } : any = await this.tenantsService.createTenant(this.form.value);
    if(!ok) {
      console.log(`${message}`);
      console.log(`Tenant couldn't create.`);
    }
    const { tenant } : any = data;
  }

  private async updateTenant() {
    const { ok, message, data } : any = await this.tenantsService.updateTenant( this.reason, this.form.value);
    if(!ok) {
      console.log(`${message}`);
      console.log(`Tenant couldn't create.`);
    }
    const { tenant } : any = data;
  }

  async saveTenant() {
    if(this.isNew) {
      await this.createTenant();
    } else {
      await this.updateTenant();
    }
    this.router.navigate(['admin', 'tenants']);
  }

}
