import { TestBed } from '@angular/core/testing';

import { OperatorAgendasService } from './operator-agendas.service';

describe('OperatorAgendasService', () => {
  let service: OperatorAgendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorAgendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
