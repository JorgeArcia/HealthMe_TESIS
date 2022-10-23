import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTenantsListComponent } from './patient-tenants-list.component';

describe('PatientTenantsListComponent', () => {
  let component: PatientTenantsListComponent;
  let fixture: ComponentFixture<PatientTenantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientTenantsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientTenantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
