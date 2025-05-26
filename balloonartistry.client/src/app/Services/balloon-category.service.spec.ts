import { TestBed } from '@angular/core/testing';

import { BalloonCategoryService } from './balloon-category.service';

describe('BalloonCategoryService', () => {
  let service: BalloonCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalloonCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
