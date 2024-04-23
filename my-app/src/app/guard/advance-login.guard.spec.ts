import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { advanceLoginGuard } from './advance-login.guard';

describe('advanceLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => advanceLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
