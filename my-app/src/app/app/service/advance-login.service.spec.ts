import { TestBed } from '@angular/core/testing';

import { AdvanceLoginService } from './advance-login.service';

describe('AdvanceLoginService', () => {
  let service: AdvanceLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvanceLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
