import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientClinicHistoryComponent } from './patient-clinic-history.component';

describe('PatientClinicHistoryComponent', () => {
  let component: PatientClinicHistoryComponent;
  let fixture: ComponentFixture<PatientClinicHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientClinicHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientClinicHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
