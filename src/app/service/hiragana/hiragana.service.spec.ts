import { TestBed, inject } from '@angular/core/testing';

import { HiraganaService } from './hiragana.service';

describe('HiraganaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HiraganaService]
    });
  });

  it('should be created', inject([HiraganaService], (service: HiraganaService) => {
    expect(service).toBeTruthy();
  }));
});
