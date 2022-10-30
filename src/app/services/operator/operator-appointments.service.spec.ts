import { TestBed } from '@angular/core/testing';

import { OperatorAppointmentsService } from './operator-appointments.service';

describe('OperatorAppointmentsService', () => {
  let service: OperatorAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
