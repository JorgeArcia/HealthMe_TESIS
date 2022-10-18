import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCalendarComponent } from './professional-calendar.component';

describe('ProfessionalCalendarComponent', () => {
  let component: ProfessionalCalendarComponent;
  let fixture: ComponentFixture<ProfessionalCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
