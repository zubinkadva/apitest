import { TestBed, inject } from '@angular/core/testing';

import { PartFourService } from './part-four.service';

describe('PartFourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartFourService]
    });
  });

  it('should be created', inject([PartFourService], (service: PartFourService) => {
    expect(service).toBeTruthy();
  }));
});
