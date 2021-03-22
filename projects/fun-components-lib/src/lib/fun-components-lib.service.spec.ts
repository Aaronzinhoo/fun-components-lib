import { TestBed } from '@angular/core/testing';

import { FunComponentsLibService } from './fun-components-lib.service';

describe('FunComponentsLibService', () => {
  let service: FunComponentsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunComponentsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
