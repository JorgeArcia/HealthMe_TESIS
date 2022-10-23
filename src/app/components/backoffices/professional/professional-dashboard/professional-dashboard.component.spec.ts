import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDashboardComponent } from './professional-dashboard.component';

describe('ProfessionalDashboardComponent', () => {
  let component: ProfessionalDashboardComponent;
  let fixture: ComponentFixture<ProfessionalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
