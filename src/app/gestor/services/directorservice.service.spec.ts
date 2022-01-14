import { TestBed } from '@angular/core/testing';

import { DirectorserviceService } from './directorservice.service';

describe('DirectorserviceService', () => {
  let service: DirectorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
