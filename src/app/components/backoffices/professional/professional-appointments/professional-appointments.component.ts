import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-appointments',
  templateUrl: './professional-appointments.component.html',
  styleUrls: ['./professional-appointments.component.css']
})
export class ProfessionalAppointmentsComponent implements OnInit {

  appointments:any = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
