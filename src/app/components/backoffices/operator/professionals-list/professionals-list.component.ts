import { Component, OnInit } from '@angular/core';
import { ProfessionalsService } from '../../../../services/operator/professionals.service';

@Component({
  selector: 'app-professionals-list',
  templateUrl: './professionals-list.component.html',
  styleUrls: ['./professionals-list.component.css']
})
export class ProfessionalsListComponent implements OnInit {

  professionals: any = [];

  constructor(
    private professionalsService: ProfessionalsService
  ) { }

  ngOnInit(): void {
    this.listProfessionals();
  }

  private async listProfessionals() {
    const {professionals}: any = await this.professionalsService.readProfessionals();
    this.professionals = professionals;
    console.log(this.professionals);
  }

}
