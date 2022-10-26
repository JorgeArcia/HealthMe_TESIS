import { TestBed } from '@angular/core/testing';

import { ProfessionalTenantsClinicHistorysService } from './professional-tenants-clinic-historys.service';

describe('ProfessionalTenantsClinicHistorysService', () => {
  let service: ProfessionalTenantsClinicHistorysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalTenantsClinicHistorysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
