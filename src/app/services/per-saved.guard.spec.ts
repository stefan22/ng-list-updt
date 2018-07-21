import { TestBed, async, inject } from '@angular/core/testing';

import { PerSavedGuard } from './per-saved.guard';

describe('PerSavedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerSavedGuard]
    });
  });

  it('should ...', inject([PerSavedGuard], (guard: PerSavedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
