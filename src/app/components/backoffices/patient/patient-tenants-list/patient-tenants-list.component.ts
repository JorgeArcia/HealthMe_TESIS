import { Component, OnInit } from '@angular/core';

import { PatientTenantsService } from 'src/app/services/patient/patient-tenants.service';
@Component({
  selector: 'app-patient-tenants-list',
  templateUrl: './patient-tenants-list.component.html',
  styleUrls: ['./patient-tenants-list.component.css']
})
export class PatientTenantsListComponent implements OnInit {

  tenants: any[] = [];

  constructor(
    private PatientTenantsService: PatientTenantsService,
  ) { }

  ngOnInit(): void {
    this.readTenants();
  }

  private async readTenants() {
    const {tenants}:any = await this.PatientTenantsService.readTenants();
    this.tenants = tenants;
  }


}
