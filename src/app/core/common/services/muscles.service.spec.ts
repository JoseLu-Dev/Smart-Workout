import { TestBed } from '@angular/core/testing';

import { MusclesService } from './muscles.service';

describe('MusclesService', () => {
  let service: MusclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
