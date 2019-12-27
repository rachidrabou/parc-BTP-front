import { TestBed } from '@angular/core/testing';

import { EnginService } from './engin.service';

describe('EnginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnginService = TestBed.get(EnginService);
    expect(service).toBeTruthy();
  });
});
