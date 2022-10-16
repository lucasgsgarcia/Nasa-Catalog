import { TestBed } from '@angular/core/testing';

import { PicsService } from './date-based-pics.service';

describe('PicsService', () => {
  let service: PicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
