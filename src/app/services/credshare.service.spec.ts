import { TestBed } from '@angular/core/testing';

import { CredshareService } from './credshare.service';

describe('CredshareService', () => {
  let service: CredshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
