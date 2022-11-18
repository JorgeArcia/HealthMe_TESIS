import { Component, OnInit } from '@angular/core';
import { PatientAppointmentsService } from '../../../../services/patient/patient-appointments.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  appointments: any[] = [];

  constructor(
    private patientAppointmentsService:PatientAppointmentsService,
  ) { }

  ngOnInit(): void {
    this.listPatientAppointments();
  }

  async listPatientAppointments() {
    const {appointments}:any = await this.patientAppointmentsService.readAppointments();
    this.appointments = appointments;
    console.log(this.appointments);
  }

}
