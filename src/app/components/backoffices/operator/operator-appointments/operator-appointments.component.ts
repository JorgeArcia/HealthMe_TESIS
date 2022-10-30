import { Component, OnInit } from '@angular/core';

import { OperatorAppointmentsService } from '../../../../services/operator/operator-appointments.service';

@Component({
  selector: 'app-operator-appointments',
  templateUrl: './operator-appointments.component.html',
  styleUrls: ['./operator-appointments.component.css']
})
export class OperatorAppointmentsComponent implements OnInit {

  appointments:any = [];

  constructor(
    private operatorAppointmentsService: OperatorAppointmentsService
  ) { }

  ngOnInit(): void {
    this.listOperatorlAppointments();
  }

  async listOperatorlAppointments() {
    const {appointments} :any = await this.operatorAppointmentsService.readAppointments();
    this.appointments = appointments;
    console.log(this.appointments);
  }

  async deleteAppointment(apptId:any) {
    const {appointment}:any = await this.operatorAppointmentsService.deleteAppointment(apptId);
    this.listOperatorlAppointments();
  }

}
