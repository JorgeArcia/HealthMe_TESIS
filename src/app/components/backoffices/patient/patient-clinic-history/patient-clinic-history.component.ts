import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import domToImage from 'dom-to-image';
import jsPDF from 'jspdf';
import * as moment from 'moment';

import { PatientTenantsClinicHistorysService } from '../../../../services/patient/patient-tenants-clinic-historys.service';

@Component({
  selector: 'app-patient-clinic-history',
  templateUrl: './patient-clinic-history.component.html',
  styleUrls: ['./patient-clinic-history.component.css']
})
export class PatientClinicHistoryComponent implements OnInit {

  reason : string | null = null;
  isLoaded: boolean = false;
  appointment:any;

  @ViewChild('dataToExport', { static: false })
  public dataToExport!: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private PatientTenantsClinicHistorysService:PatientTenantsClinicHistorysService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.reason = this.activatedRoute?.snapshot.params['historyId'];
    this.isLoaded = false;
    await this.readHistory(this.reason);
    this.isLoaded = !this.isLoaded;
    console.log(this.appointment);
  }

  private async readHistory(id:any) {
    const {ok,appointment}:any  = await this.PatientTenantsClinicHistorysService.readPatientHistory(this.reason);
    if(!ok) {
      console.log(`Error to read historyId: ${this.reason}`);
    }
    this.appointment = appointment;
  }

  async downloadPDF() {
    const width = this.dataToExport.nativeElement.clientWidth;
    const height = this.dataToExport.nativeElement.clientHeight + 40;
    let orientation = '';
    let imageUnit = 'pt';
    if (width > height) {
      orientation = 'l';
    } else {
      orientation = 'p';
    }
    domToImage.toPng(this.dataToExport.nativeElement, {
      width: width,
      height: height
    }).then(result => {
      let jsPdfOptions :any = {
        orientation: orientation,
        unit: imageUnit,
        format: [width + 50, height + 220]
      }
      const pdf = new jsPDF(jsPdfOptions);
      const filename = `${this.appointment.patient.name} ${this.appointment.patient.surname} - Clinic history ${moment().format('ll')}`;
      pdf.setFontSize(48);
      pdf.setTextColor('#2585fe');
      pdf.text( filename, 25, 75);
      pdf.setFontSize(24);
      pdf.setTextColor('#131523');
      pdf.text('Report date: ' + moment().format('ll'), 25, 115);
      pdf.addImage(result, 'PNG', 25, 185, width, height);
      pdf.save(filename+ '.pdf');
    });
      
    console.log(`Download pdf!`);
  }

}
