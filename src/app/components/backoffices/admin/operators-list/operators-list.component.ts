import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { OperatorsService } from '../../../../services/admin/operators.service';

@Component({
  selector: 'app-operators-list',
  templateUrl: './operators-list.component.html',
  styleUrls: ['./operators-list.component.css']
})
export class OperatorsListComponent implements OnInit {

  isLoaded: boolean = false;
  operators: any = [];

  constructor(
    private operatorsService : OperatorsService,
    ) { }

  async ngOnInit(): Promise<void> {
      this.operators = await this.listOperators();
  }

  private async listOperators() {
    const { ok, operators } : any = await this.operatorsService.readOperators();
    return operators;
  }

}
