import { TestBed } from '@angular/core/testing';

import { OperatorTenantsService } from './operator-tenants.service';

describe('OperatorTenantsService', () => {
  let service: OperatorTenantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorTenantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
