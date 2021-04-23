import { TestBed } from '@angular/core/testing';

import { EmailVerificationService } from './email-verification.service';

describe('EmailVerificationService', () => {
  let service: EmailVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
