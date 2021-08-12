import { TestBed } from '@angular/core/testing';

import { CalendarCreatorService } from './calendar-creator.service';

describe('CalendarCreatorService', () => {
  let service: CalendarCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
