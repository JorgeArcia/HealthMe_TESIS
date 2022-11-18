import { Component, OnInit } from '@angular/core';

import { ProfessionalAppointmentsService } from '../../../../services/professional/professional-appointments.service';


@Component({
  selector: 'app-professional-dashboard',
  templateUrl: './professional-dashboard.component.html',
  styleUrls: ['./professional-dashboard.component.css']
})
export class ProfessionalDashboardComponent implements OnInit {

  appointments:any = [];
  
  constructor(
    private professionalAppointmentsService: ProfessionalAppointmentsService
  ) { }

  ngOnInit(): void {
    this.listProfessionalAppointments();
  }

  async listProfessionalAppointments() {
    const {appointments} :any = await this.professionalAppointmentsService.readAppointments();
    this.appointments = appointments;
    console.log(this.appointments);
  }
}
