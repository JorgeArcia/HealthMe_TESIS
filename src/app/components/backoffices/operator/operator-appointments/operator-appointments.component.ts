import { Component, OnInit } from '@angular/core';

import { OperatorAppointmentsService } from '../../../../services/operator/operator-appointments.service';

import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Estas seguro de eliminar turno?',
      text: "No podras revertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const {appointment}:any = await this.operatorAppointmentsService.deleteAppointment(apptId);
        this.listOperatorlAppointments();
        Swal.fire(
          'Eliminado!',
          'Turno eliminado con exito',
          'success'
        )
      }
    })
  }
}
