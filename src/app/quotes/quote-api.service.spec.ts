import { TestBed } from '@angular/core/testing';

import { QuoteAPIService } from './quote-api.service';

describe('QuoteAPIService', () => {
  let service: QuoteAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
