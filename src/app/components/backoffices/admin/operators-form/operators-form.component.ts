import { Component, OnInit } from '@angular/core';
import { OperatorsService } from 'src/app/services/admin/operators.service';

@Component({
  selector: 'app-operators-form',
  templateUrl: './operators-form.component.html',
  styleUrls: ['./operators-form.component.css']
})
export class OperatorsFormComponent implements OnInit {

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


