import { TestBed } from '@angular/core/testing';

import { AKDataService } from './ak-data.service';

describe('AKDataService', () => {
  let service: AKDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AKDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
