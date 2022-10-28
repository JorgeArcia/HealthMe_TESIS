import { Component, OnInit } from '@angular/core';

import { PatientTenantsAppointmentsService } from 'src/app/services/patient/patient-tenants-appointments.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  appointments: any[] = [];

  constructor(
    private PatientTenantsAppointmentsService: PatientTenantsAppointmentsService,
  ) { }

  ngOnInit(): void {
    this.readAppointments();
  }

  private async readAppointments() {
    const {appointments}:any = await this.PatientTenantsAppointmentsService.readAppointments();
    this.appointments = appointments;
  }

}
