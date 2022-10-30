import { Component, OnInit } from '@angular/core';

import { PatientTenantsService } from '../../../../services/patient/patient-tenants.service';
@Component({
  selector: 'app-patient-tenants-list',
  templateUrl: './patient-tenants-list.component.html',
  styleUrls: ['./patient-tenants-list.component.css']
})
export class PatientTenantsListComponent implements OnInit {

  tenants: any[] = [];

  constructor(
    private patientTenantsService: PatientTenantsService,
  ) { }

  ngOnInit(): void {
    this.listPatientTenants();
    console.log(this.tenants);
  }

  async listPatientTenants() {
    const { tenants } : any = await this.patientTenantsService.readAllTenants();
    this.tenants = tenants;
  }


}
