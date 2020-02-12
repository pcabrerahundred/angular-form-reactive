import { TestBed } from '@angular/core/testing';

import { DatadbService } from './datadb.service';

describe('DatadbService', () => {
  let service: DatadbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatadbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
