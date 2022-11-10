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

  async ngOnInit(): Promise<void> {
    this.tenantId = this.activatedRoute?.snapshot.params['tenantId'];
    this.professionalId = this.activatedRoute?.snapshot.params['professionalId'];
    await this.listAgendas();
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
    this.getDates(agendas);
  }

  async switchEnableAgenda(agendaId:any) {
    const result: any = await this.tenantAgendasService.switchEnableAgenda(agendaId);
    this.filterAgenda();
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
      this.listAgendas();
    } else {
      this.filterAgenda();
    }
  }

  async filterAgenda() {
    await this.listAgendas();
    this.agendas = this.agendas.filter((ag:any) => ag.date === this.date);
  }

}
