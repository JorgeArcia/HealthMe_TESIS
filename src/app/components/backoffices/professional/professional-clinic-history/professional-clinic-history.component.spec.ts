import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalClinicHistoryComponent } from './professional-clinic-history.component';

describe('ProfessionalClinicHistoryComponent', () => {
  let component: ProfessionalClinicHistoryComponent;
  let fixture: ComponentFixture<ProfessionalClinicHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalClinicHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalClinicHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
