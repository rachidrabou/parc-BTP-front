import { TestBed } from '@angular/core/testing';

import { CamionServiceService } from './camion-service.service';

describe('CamionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamionServiceService = TestBed.get(CamionServiceService);
    expect(service).toBeTruthy();
  });
});
