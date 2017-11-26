import { TestBed, inject } from '@angular/core/testing';

import { PartFeaturesService } from './part-features.service';

describe('PartFeaturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartFeaturesService]
    });
  });

  it('should be created', inject([PartFeaturesService], (service: PartFeaturesService) => {
    expect(service).toBeTruthy();
  }));
});
