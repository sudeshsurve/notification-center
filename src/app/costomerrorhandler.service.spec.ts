import { TestBed } from '@angular/core/testing';

import { CostomerrorhandlerService } from './costomerrorhandler.service';

describe('CostomerrorhandlerService', () => {
  let service: CostomerrorhandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostomerrorhandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
