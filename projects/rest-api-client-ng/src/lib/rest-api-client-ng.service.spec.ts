import { TestBed } from '@angular/core/testing';

import { SzRestApiClientService } from './rest-api-client-ng.service';

describe('SzRestApiClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SzRestApiClientService = TestBed.get(SzRestApiClientService);
    expect(service).toBeTruthy();
  });
});
