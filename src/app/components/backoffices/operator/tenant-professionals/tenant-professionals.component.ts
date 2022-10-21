import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//por ahora luego crear servicio operator y buscar professionales
import { OperatorsService } from 'src/app/services/admin/operators.service';

@Component({
  selector: 'app-tenant-professionals',
  templateUrl: './tenant-professionals.component.html',
  styleUrls: ['./tenant-professionals.component.css']
})
export class TenantProfessionalsComponent implements OnInit {

  operators: any[] = [];

  constructor(
    private operatrosService : OperatorsService,
  ) { }

  ngOnInit(): void {
    this.readOperators();
    console.log(this.operators)
  }

  private async readOperators() {
    const {ok,data}:any = await this.operatrosService.readOperators();
    if(!ok) {
      console.log(`Operators not found.`);
    }
    const { operators } = data;
    this.operators = operators;
  }

}
