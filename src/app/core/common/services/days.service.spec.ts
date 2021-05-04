import { TestBed } from '@angular/core/testing';

import { DaysService } from './days.service';

describe('DaysService', () => {
  let service: DaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
