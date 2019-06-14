import { TestBed, inject } from '@angular/core/testing';

import { PartTwoAuthService } from './part-two-auth.service';

describe('PartTwoAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartTwoAuthService]
    });
  });

  it('should be created', inject([PartTwoAuthService], (service: PartTwoAuthService) => {
    expect(service).toBeTruthy();
  }));
});
