import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperatorTenantsAgendasService } from '../../../../services/operator/operator-tenants-agendas.service';

import { TenantsService } from '../../../../services/admin/tenants.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-professional-agenda-manage',
  templateUrl: './professional-agenda-manage.component.html',
  styleUrls: ['./professional-agenda-manage.component.css']
})
export class ProfessionalAgendaManageComponent implements OnInit {

  tenantId: any;
  professionalId: any;
  professionals: any[] = [];
  professionalPick:any;
  generateAgendaAvaible: any = true;

  agendas: any = [];
  date:any = 'selected';

  dates: any = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private tenantAgendasService: OperatorTenantsAgendasService,
    private tenantsService: TenantsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.tenantId = this.activatedRoute?.snapshot.params['tenantId'];
    this.professionalId = this.activatedRoute?.snapshot.params['professionalId'];
    if(this.date === 'selected') {
      await this.listAgendas();
    } else {
      await this.filterAgenda();
    }
    this.readProfessionals();
  }

  private async readProfessionals() {
    var profId = parseInt(this.professionalId);
    const {professionals}: any = await this.tenantsService.readTenantProfessionals(this.tenantId);
    this.professionals = professionals;
    this.professionals = this.professionals.filter((prof:any) => prof.id === profId);
    this.professionalPick = {
      id: this.professionals[0].id,
      name: this.professionals[0].name,
      surName: this.professionals[0].surname
    }
  }

  async generateAgenda(){
    if (this.agendas.length > 0) {
      var lastDate = new Date(this.agendas[this.agendas.length - 1].date);
      var currentDate = new Date();
      if ((currentDate.getMonth() + 1) < (lastDate.getMonth() +1)) {
        if (currentDate.getDate() > lastDate.getDate()) {
          Swal.fire('Este profesional tiene una agenda habilitada para los proximos dias')
        }
      }if ((currentDate.getMonth() + 1) === (lastDate.getMonth()+1)) {
        if (currentDate.getDate() < lastDate.getDate()) {
          Swal.fire('Este profesional tiene una agenda habilitada para los proximos dias')
        }
      } 
    } else {
      const professionalAgenda = {
        tenantId: this.tenantId,
        professionalId: this.professionalId,
      }
      const result :any= await this.tenantAgendasService.generateAgenda(professionalAgenda);
      this.listAgendas();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agenda generada con exito',
        showConfirmButton: false,
        timer: 1000
      })
    }
  }

  async listAgendas() {
    const {agendas}:any = await this.tenantAgendasService.readAgendas(this.tenantId, this.professionalId);
    this.agendas = agendas;
    const checkAgenda = this.agendas.filter((ag: any) => ag.date === null && ag.hour === null && ag.scheduled === false) 
    if (checkAgenda.length > 0) {
      this.agendas.shift();
    }
    this.getDates(agendas);
  }

  async switchEnableAgenda(agendaId:any) {
    const result: any = await this.tenantAgendasService.switchEnableAgenda(agendaId);
    if(this.date === 'selected') {
      await this.listAgendas();
    } else {
      await this.filterAgenda();
    }
  }

  async getDates(agendas:any[]) {
    let agendaDates: any = [];
    for (const ag of agendas) {
      const exist = agendaDates.find((a:any) => ag.date === a);
      if(!exist) {
        agendaDates.push(ag.date);
      }
    }
    this.dates = agendaDates;
  }

  async onChangeDate(event:any) {
    this.date = event.target.value;
    console.log(this.date);
    if(this.date === 'selected') {
      await this.listAgendas();
    } else {
      await this.filterAgenda();
    }
  }

  async filterAgenda() {
    await this.listAgendas();
    this.agendas = this.agendas.filter((ag:any) => ag.date === this.date);
  }

}
