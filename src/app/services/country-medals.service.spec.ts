import { TestBed } from '@angular/core/testing';

import { CountryMedalsService } from './country-medals.service';

describe('CountryMedalsService', () => {
  let service: CountryMedalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryMedalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
