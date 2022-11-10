import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperatorTenantsAgendasService } from '../../../../services/operator/operator-tenants-agendas.service';

@Component({
  selector: 'app-professional-agenda-manage',
  templateUrl: './professional-agenda-manage.component.html',
  styleUrls: ['./professional-agenda-manage.component.css']
})
export class ProfessionalAgendaManageComponent implements OnInit {

  tenantId: any;
  professionalId: any;

  agendas: any = [];
  date:any;

  dates: any = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private tenantAgendasService: OperatorTenantsAgendasService
  ) { }

  ngOnInit(): void {
    this.tenantId = this.activatedRoute?.snapshot.params['tenantId'];
    this.professionalId = this.activatedRoute?.snapshot.params['professionalId'];
    this.listAgendas();
    const now = new Date()
    console.log(now);
  }

  async generateAgenda(){
    const professionalAgenda = {
      tenantId: this.tenantId,
      professionalId: this.professionalId,
    }
    const result :any= await this.tenantAgendasService.generateAgenda(professionalAgenda);
    this.listAgendas();
  }

  async listAgendas() {
    const {agendas}:any = await this.tenantAgendasService.readAgendas(this.tenantId, this.professionalId);
    this.agendas = agendas;
    if(this.agendas[this.agendas.length-1]?.date) {
      this.date = this.agendas[this.agendas.length-1]?.date;
    }
    console.log(this.date);
  }

  async switchEnableAgenda(agendaId:any) {
    console.log(agendaId);
    const result: any = await this.tenantAgendasService.switchEnableAgenda(agendaId);
    console.log(result);
    this.listAgendas();
  }

}
