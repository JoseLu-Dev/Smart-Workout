import { TestBed } from '@angular/core/testing';

import { ColorContrastService } from './color-contrast.service';

describe('ColorContrastService', () => {
  let service: ColorContrastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorContrastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
