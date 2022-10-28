import { TestBed } from '@angular/core/testing';

import { PatientTenantsService } from './patient-tenants.service';

describe('PatientTenantsService', () => {
  let service: PatientTenantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientTenantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
