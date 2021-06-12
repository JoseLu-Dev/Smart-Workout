import { TestBed } from '@angular/core/testing';

import { TrainingsFormService } from './trainings-form.service';

describe('TrainingsService', () => {
  let service: TrainingsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
