import { TestBed } from '@angular/core/testing';

import { PersonCarService } from './person-car.service';

describe('PersonCarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonCarService = TestBed.get(PersonCarService);
    expect(service).toBeTruthy();
  });
});
