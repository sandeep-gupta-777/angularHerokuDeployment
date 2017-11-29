import { TestBed, inject } from '@angular/core/testing';

import { IsUserAlsoOwnerService } from './is-user-also-owner.service';

describe('IsUserAlsoOwnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsUserAlsoOwnerService]
    });
  });

  it('should be created', inject([IsUserAlsoOwnerService], (service: IsUserAlsoOwnerService) => {
    expect(service).toBeTruthy();
  }));
});
