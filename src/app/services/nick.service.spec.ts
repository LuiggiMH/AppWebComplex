import { TestBed } from '@angular/core/testing';

import { NickService } from './nick.service';

describe('NickService', () => {
  let service: NickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
