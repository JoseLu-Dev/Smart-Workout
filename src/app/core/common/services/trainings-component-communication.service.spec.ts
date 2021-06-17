import { TestBed } from '@angular/core/testing';

import { TrainingsComponentCommunicationService } from './trainings-component-communication.service';

describe('TrainingsService', () => {
  let service: TrainingsComponentCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingsComponentCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
