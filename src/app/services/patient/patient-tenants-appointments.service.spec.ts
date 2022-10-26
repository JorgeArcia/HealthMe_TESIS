import { TestBed } from '@angular/core/testing';

import { PatientTenantsAppointmentsService } from './patient-tenants-appointments.service';

describe('PatientTenantsAppointmentsService', () => {
  let service: PatientTenantsAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientTenantsAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
