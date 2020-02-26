import { TestBed } from '@angular/core/testing';

import { CallFunctionService } from './call-function.service';

describe('CallFunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallFunctionService = TestBed.get(CallFunctionService);
    expect(service).toBeTruthy();
  });
});
