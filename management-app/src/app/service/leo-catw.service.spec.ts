import { TestBed } from '@angular/core/testing';

import { LeoCatwService } from './leo-catw.service';

describe('LeoCatwService', () => {
  let service: LeoCatwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeoCatwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
