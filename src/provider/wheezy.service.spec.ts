import { TestBed } from '@angular/core/testing';

import { WheezyService } from './wheezy.service';

describe('WheezyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WheezyService = TestBed.get(WheezyService);
    expect(service).toBeTruthy();
  });
});
