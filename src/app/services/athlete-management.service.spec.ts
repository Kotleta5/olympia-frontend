import { TestBed } from '@angular/core/testing';

import { AthleteManagementService } from './athlete-management.service';

describe('AthleteManagementService', () => {
  let service: AthleteManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthleteManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
