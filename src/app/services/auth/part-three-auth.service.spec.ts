import { TestBed, inject } from '@angular/core/testing';

import { PartThreeAuthService } from './part-three-auth.service';

describe('PartThreeAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartThreeAuthService]
    });
  });

  it('should be created', inject([PartThreeAuthService], (service: PartThreeAuthService) => {
    expect(service).toBeTruthy();
  }));
});
