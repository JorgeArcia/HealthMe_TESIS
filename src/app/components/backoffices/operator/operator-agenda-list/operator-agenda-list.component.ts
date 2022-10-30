import { Component, OnInit } from '@angular/core';

import { OperatorAgendasService } from '../../../../services/operator/operator-agendas.service';

@Component({
  selector: 'app-operator-agenda-list',
  templateUrl: './operator-agenda-list.component.html',
  styleUrls: ['./operator-agenda-list.component.css']
})
export class OperatorAgendaListComponent implements OnInit {

  agendas: any[] = [];

  constructor(
    private operatorAgendasService: OperatorAgendasService
  ) { }

  ngOnInit(): void {
    this.listOperatorAgendas();
  }

  async listOperatorAgendas() {
    const {agendas} :any = await this.operatorAgendasService.readAgendas();
    this.agendas = agendas;
    console.log(this.agendas);
  }


}
