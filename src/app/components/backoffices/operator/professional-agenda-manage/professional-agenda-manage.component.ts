import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professional-agenda-manage',
  templateUrl: './professional-agenda-manage.component.html',
  styleUrls: ['./professional-agenda-manage.component.css']
})
export class ProfessionalAgendaManageComponent implements OnInit {

  tenantId: any;
  professionalId: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tenantId = this.activatedRoute?.snapshot.params['tenantId'];
    this.professionalId = this.activatedRoute?.snapshot.params['professionalId'];
    console.log(this.tenantId, this.professionalId);
  }

}
