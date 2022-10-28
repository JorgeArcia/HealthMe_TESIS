import { Component, OnInit } from '@angular/core';

import { PatientTenantsAppointmentsService } from 'src/app/services/patient/patient-tenants-appointments.service';
import { OperatorTenantsService } from '../../../../services/operator/operator-tenants.service';


@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {

  appointments: any[] = [];
  tenants: any[] = [];
  selectedTenant: any;
  selectedEspecialidad: any;

  constructor(
    private PatientTenantsAppointmentsService:PatientTenantsAppointmentsService,
    private operatorTenantsService : OperatorTenantsService,
  ) { }

  ngOnInit(): void {
    this.readAppointments();
    this.readTenants();
  }

  private async readAppointments() {
    const {appointments}:any = await this.PatientTenantsAppointmentsService.readAppointments();
    this.appointments = appointments;
  }

  private async readTenants() {
    const {tenants}:any = await this.operatorTenantsService.readTenants();
    this.tenants = tenants;
  }

  onSelectTenant(obj: any): void{
    this.selectedTenant = obj.detail;
  }

  onSelectEspecialidad(obj: any): void{
    this.selectedEspecialidad = obj.detail;
  }


}
