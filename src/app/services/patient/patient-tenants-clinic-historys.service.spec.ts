import { TestBed } from '@angular/core/testing';

import { PatientTenantsClinicHistorysService } from './patient-tenants-clinic-historys.service';

describe('PatientTenantsClinicHistorysService', () => {
  let service: PatientTenantsClinicHistorysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientTenantsClinicHistorysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
