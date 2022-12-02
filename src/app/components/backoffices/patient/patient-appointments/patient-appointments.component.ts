import { Component, OnInit } from '@angular/core';

import { PatientAppointmentsService } from '../../../../services/patient/patient-appointments.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {

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

  async deleteAppointment(apptId:any) {
    Swal.fire({
      title: 'Estas seguro de eliminar el turno?',
      text: "No podras revertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { ok, appointmentId } = await this.patientAppointmentsService.deleteAppointment(apptId);
        if(ok) {
          this.listPatientAppointments();
        } else {
          console.log(`Error to delete the appointment: ${apptId}`);
        }
        Swal.fire(
          'Eliminado',
          'Turno eliminado con exito',
          'success'
        )
      }
    })
  }
}
