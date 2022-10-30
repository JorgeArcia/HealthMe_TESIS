import { TestBed } from '@angular/core/testing';

import { ProfessionalAppointmentsService } from './professional-appointments.service';

describe('ProfessionalAppointmentsService', () => {
  let service: ProfessionalAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
