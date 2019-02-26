import { TestBed } from '@angular/core/testing';

import { RacaService } from './raca.service';

describe('RacaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RacaService = TestBed.get(RacaService);
    expect(service).toBeTruthy();
  });
});
