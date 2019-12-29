import { TestBed } from '@angular/core/testing';

import { ChefChantierService } from './chef-chantier.service';

describe('ChefChantierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChefChantierService = TestBed.get(ChefChantierService);
    expect(service).toBeTruthy();
  });
});
