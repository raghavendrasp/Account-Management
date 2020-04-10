import { TestBed } from '@angular/core/testing';

import { WbsService } from './wbs.service';

describe('WbsService', () => {
  let service: WbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
