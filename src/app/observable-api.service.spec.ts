import { TestBed } from '@angular/core/testing';

import { ObservableAPIService } from './observable-api.service';

describe('ObservableAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservableAPIService = TestBed.get(ObservableAPIService);
    expect(service).toBeTruthy();
  });
});
