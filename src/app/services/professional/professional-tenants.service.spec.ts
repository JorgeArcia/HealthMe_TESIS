import { TestBed } from '@angular/core/testing';

import { ProfessionalTenantsService } from './professional-tenants.service';

describe('ProfessionalTenantsService', () => {
  let service: ProfessionalTenantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalTenantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
