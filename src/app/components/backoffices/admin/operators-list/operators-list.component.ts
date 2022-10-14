import { Component, OnInit } from '@angular/core';
import { OperatorsService } from '../../../../services/admin/operators.service';

@Component({
  selector: 'app-operators-list',
  templateUrl: './operators-list.component.html',
  styleUrls: ['./operators-list.component.css']
})
export class OperatorsListComponent implements OnInit {

  operators: any[] = [];

  constructor(private operatorsService : OperatorsService) { }

  ngOnInit(): void {
    this.readOperators();
  }

  private async readOperators() {
    const {ok,data}:any = await this.operatorsService.readOperators();
    if (!ok) {
      console.log(`Operators not found.`)
    }
    const { operators } = data;
    this.operators = operators;
  }

  async deleteOperator(id: any) {
    const {ok,message,data}: any = await this.operatorsService.deleteOperator(id);
    console.log(message);
    if (!ok) {
      console.log(`${message}`);
      console.log(`Operators couldn't delete.`);
    }
    const { operator } = data;
    this.readOperators();
  }

}
