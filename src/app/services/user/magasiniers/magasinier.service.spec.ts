import { TestBed } from '@angular/core/testing';

import { MagasinierService } from './magasinier.service';

describe('MagasinierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagasinierService = TestBed.get(MagasinierService);
    expect(service).toBeTruthy();
  });
});
