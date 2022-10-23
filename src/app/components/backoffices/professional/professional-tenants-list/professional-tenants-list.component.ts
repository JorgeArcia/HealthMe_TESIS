import { Component, OnInit } from '@angular/core';

import { ProfessionalTenantsService } from '../../../../services/professional/professional-tenants.service';

@Component({
  selector: 'app-professional-tenants-list',
  templateUrl: './professional-tenants-list.component.html',
  styleUrls: ['./professional-tenants-list.component.css']
})
export class ProfessionalTenantsListComponent implements OnInit {

  tenants: any[] = [];

  constructor(
    private professionalTenantsService: ProfessionalTenantsService,
  ) { }

  ngOnInit(): void {
    this.readTenants();
  }

  private async readTenants() {
    const {tenants}:any = await this.professionalTenantsService.readTenants();
    this.tenants = tenants;
  }

}
