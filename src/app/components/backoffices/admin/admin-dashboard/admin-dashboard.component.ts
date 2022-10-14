import { Component, OnInit } from '@angular/core';
import { TenantsService } from '../../../../services/admin/tenants.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  tenants: any[] = [];

  constructor(private tenantsService : TenantsService) { }

  ngOnInit(): void {
    this.readTenants();
  }

  private async readTenants() {
    const {ok,data}:any = await this.tenantsService.readTenants();
    if(!ok) {
      console.log(`Tenants not found.`);
    }
    const { tenants } = data;
    this.tenants = tenants;
  }

  async deleteTenant(id: any) {
    const {ok, message, data}:any = await this.tenantsService.deleteTenant(id);
    console.log(message);
    if(!ok) {
      console.log(`${message}`);
      console.log(`Tenants couldn't delete.`);
    }
    const { tenant } = data;
    this.readTenants();
  }

}
