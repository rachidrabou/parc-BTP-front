import { TestBed } from '@angular/core/testing';

import { ObjetMobileService } from './objet-mobile.service';

describe('ObjetMobileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjetMobileService = TestBed.get(ObjetMobileService);
    expect(service).toBeTruthy();
  });
});
