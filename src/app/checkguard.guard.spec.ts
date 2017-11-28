import { TestBed, async, inject } from '@angular/core/testing';

import { CheckguardGuard } from './checkguard.guard';

describe('CheckguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckguardGuard]
    });
  });

  it('should ...', inject([CheckguardGuard], (guard: CheckguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
