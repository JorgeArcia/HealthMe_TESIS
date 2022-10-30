import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessionalsService } from '../../../../services/operator/professionals.service';

@Component({
  selector: 'app-tenant-professional-specialities',
  templateUrl: './tenant-professional-specialities.component.html',
  styleUrls: ['./tenant-professional-specialities.component.css']
})
export class TenantProfessionalSpecialitiesComponent implements OnInit {

  tenantId:any;
  professionalId:any;

  specialities: any = [];
  professionalSpecialities: any = []

  selectedSpeciality:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private professionalsService: ProfessionalsService,
  ) { }

  ngOnInit(): void {
    this.tenantId = this.activatedRoute?.snapshot.params['tenantId'];
    this.professionalId = this.activatedRoute?.snapshot.params['professionalId'];
    this.readSpecialities();
    this.listProfessionalSpecialities();
  }

  async readSpecialities() {
    const {specialities}:any = await this.professionalsService.readProfessionalsSpecialities();
    this.specialities = specialities;
  }

  async onChangeSpeciality(event:any) {
    if(Number(event.target.value)) {
      this.selectedSpeciality = event.target.value;
    } else {
      this.selectedSpeciality = null;
    }
  }

  async addSpeciality() {
    if(this.selectedSpeciality !== null) {
      const {specialist} = await this.professionalsService.addProfessionalSpeciality({
        tenantId: this.tenantId,
        professionalId: this.professionalId,
        specialityId: this.selectedSpeciality,
      });
      this.listProfessionalSpecialities();
    } else {
      console.log('Please select a speciality!');
    }
  }

  private async listProfessionalSpecialities() {
    const { specialities }:any = await this.professionalsService.readProfessionalSpecialities({
      tenantId: this.tenantId,
      professionalId: this.professionalId,
    });
    this.professionalSpecialities = specialities;
  }

  async removeSpeciality(profSpecId:any) {
    const {specialist} = await this.professionalsService.removeProfessionalSpeciality(profSpecId);
    await this.listProfessionalSpecialities();
  }

}
