import { TestBed } from '@angular/core/testing';

import { ProfessionalTenantsAgendaService } from './professional-tenants-agenda.service';

describe('ProfessionalTenantsAgendaService', () => {
  let service: ProfessionalTenantsAgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalTenantsAgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
