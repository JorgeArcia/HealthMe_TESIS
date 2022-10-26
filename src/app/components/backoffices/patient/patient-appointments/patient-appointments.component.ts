import { Component, OnInit } from '@angular/core';

import { PatientTenantsAppointmentsService } from 'src/app/services/patient/patient-tenants-appointments.service';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {

  appointments: any[] = [];

  constructor(
    private PatientTenantsAppointmentsService:PatientTenantsAppointmentsService,
  ) { }

  ngOnInit(): void {
    this.readAppointments();
  }

  private async readAppointments() {
    const {appointments}:any = await this.PatientTenantsAppointmentsService.readAppointments();
    this.appointments = appointments;
  }

}
