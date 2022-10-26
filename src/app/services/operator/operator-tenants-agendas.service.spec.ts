import { TestBed } from '@angular/core/testing';

import { OperatorTenantsAgendasService } from './operator-tenants-agendas.service';

describe('OperatorTenantsAgendasService', () => {
  let service: OperatorTenantsAgendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorTenantsAgendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
