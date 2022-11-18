import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantsService } from '../../../../services/admin/tenants.service';
import { OperatorAppointmentsService } from '../../../../services/operator/operator-appointments.service';

@Component({
  selector: 'app-operator-dashboard',
  templateUrl: './operator-dashboard.component.html',
  styleUrls: ['./operator-dashboard.component.css']
})
export class OperatorDashboardComponent implements OnInit {

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
