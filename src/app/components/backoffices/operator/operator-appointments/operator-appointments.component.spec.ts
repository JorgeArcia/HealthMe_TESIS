import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorAppointmentsComponent } from './operator-appointments.component';

describe('OperatorAppointmentsComponent', () => {
  let component: OperatorAppointmentsComponent;
  let fixture: ComponentFixture<OperatorAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
