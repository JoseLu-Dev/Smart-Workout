import { TestBed } from '@angular/core/testing';

import { ServerTestConnectionService } from './server-test-connection.service';

describe('ServerTestConnectionService', () => {
  let service: ServerTestConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerTestConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
