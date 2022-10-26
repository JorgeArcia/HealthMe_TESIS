import { Component, OnInit } from '@angular/core';

import { OperatorTenantsAgendasService } from 'src/app/services/operator/operator-tenants-agendas.service';

@Component({
  selector: 'app-operator-agenda-list',
  templateUrl: './operator-agenda-list.component.html',
  styleUrls: ['./operator-agenda-list.component.css']
})
export class OperatorAgendaListComponent implements OnInit {

  agendas: any[] = [];

  constructor(
    private OperatorTenantsAgendasService: OperatorTenantsAgendasService,
  ) { }

  ngOnInit(): void {
    this.readAgendas();
  }

  private async readAgendas() {
    const {agendas}:any = await this.OperatorTenantsAgendasService.readAgendas();
    this.agendas = agendas;
  }

}
