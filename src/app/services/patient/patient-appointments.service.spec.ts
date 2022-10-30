import { TestBed } from '@angular/core/testing';

import { PatientAppointmentsService } from './patient-appointments.service';

describe('PatientAppointmentsService', () => {
  let service: PatientAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
