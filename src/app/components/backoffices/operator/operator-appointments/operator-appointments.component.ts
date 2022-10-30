import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-appointments',
  templateUrl: './operator-appointments.component.html',
  styleUrls: ['./operator-appointments.component.css']
})
export class OperatorAppointmentsComponent implements OnInit {

  appointments:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  async deleteAppointment(apptId:any) {
    console.log(apptId);
  }

}
