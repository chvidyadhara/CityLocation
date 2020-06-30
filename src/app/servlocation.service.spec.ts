import { TestBed } from '@angular/core/testing';

import { ServlocationService } from './servlocation.service';

describe('ServlocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServlocationService = TestBed.get(ServlocationService);
    expect(service).toBeTruthy();
  });
});
