import { Component, OnInit } from '@angular/core';

import { PatientAppointmentsService } from '../../../../services/patient/patient-appointments.service';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {

  appointments: any[] = [];
  // tenants: any[] = [];
  // selectedTenant: any;
  // selectedEspecialidad: any;

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

  async deleteAppointment(apptId:any) {
    const { ok, appointmentId } = await this.patientAppointmentsService.deleteAppointment(apptId);
    if(ok) {
      this.listPatientAppointments();
    } else {
      console.log(`Error to delete the appointment: ${apptId}`);
    }
  }


}
