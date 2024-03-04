import { TestBed } from '@angular/core/testing';

import { MedalistService } from './medalist.service';

describe('MedalistService', () => {
  let service: MedalistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedalistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
