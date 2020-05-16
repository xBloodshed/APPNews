import { TestBed } from '@angular/core/testing';

import { ApnewsapiService } from './apnewsapi.service';

describe('ApnewsapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApnewsapiService = TestBed.get(ApnewsapiService);
    expect(service).toBeTruthy();
  });
});
