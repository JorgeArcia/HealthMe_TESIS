import { Component, OnInit } from '@angular/core';

import { ProfessionalTenantsAgendaService } from 'src/app/services/professional/professional-tenants-agenda.service';

@Component({
  selector: 'app-professional-agenda-list',
  templateUrl: './professional-agenda-list.component.html',
  styleUrls: ['./professional-agenda-list.component.css']
})
export class ProfessionalAgendaListComponent implements OnInit {

  agendas: any[] = [];

  constructor(
    private ProfessionalTenantsAgendaService: ProfessionalTenantsAgendaService,
  ) { }

    ngOnInit(): void {
    this.readAgendas();
  }

  private async readAgendas() {
    const {agendas}:any = await this.ProfessionalTenantsAgendaService.readAgendas();
    this.agendas = agendas;
  }

}
