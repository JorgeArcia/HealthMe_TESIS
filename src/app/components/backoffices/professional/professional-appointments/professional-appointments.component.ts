import { Component, OnInit } from '@angular/core';

import { ProfessionalAppointmentsService } from '../../../../services/professional/professional-appointments.service';

@Component({
  selector: 'app-professional-appointments',
  templateUrl: './professional-appointments.component.html',
  styleUrls: ['./professional-appointments.component.css']
})
export class ProfessionalAppointmentsComponent implements OnInit {

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
