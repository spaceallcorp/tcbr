import { TestBed } from '@angular/core/testing';

import { RecrutamentoService } from './recrutamento.service';

describe('RecrutamentoService', () => {
  let service: RecrutamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecrutamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
