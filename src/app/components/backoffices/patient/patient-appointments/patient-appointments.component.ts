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

  }

  async deleteAppointment(apptId:any) {
    console.log(apptId);
    const { ok, appointmentId } = await this.patientAppointmentsService.deleteAppointment(apptId);
    console.log(ok, appointmentId);
  }


}
