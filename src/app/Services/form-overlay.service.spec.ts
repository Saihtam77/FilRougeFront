import { TestBed } from '@angular/core/testing';

import { FormOverlayService } from './form-overlay.service';

describe('FormOverlayService', () => {
  let service: FormOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
