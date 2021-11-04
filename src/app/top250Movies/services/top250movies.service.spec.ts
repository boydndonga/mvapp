import { TestBed } from '@angular/core/testing';

import { Top250moviesService } from './top250movies.service';

describe('Top250moviesService', () => {
  let service: Top250moviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Top250moviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
