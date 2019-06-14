import { TestBed, inject } from '@angular/core/testing';

import { PartFourAuthService } from './part-four-auth.service';

describe('PartFourAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartFourAuthService]
    });
  });

  it('should be created', inject([PartFourAuthService], (service: PartFourAuthService) => {
    expect(service).toBeTruthy();
  }));
});
