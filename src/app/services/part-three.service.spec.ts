import { TestBed, inject } from '@angular/core/testing';

import { PartThreeService } from './part-three.service';

describe('PartThreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartThreeService]
    });
  });

  it('should be created', inject([PartThreeService], (service: PartThreeService) => {
    expect(service).toBeTruthy();
  }));
});
