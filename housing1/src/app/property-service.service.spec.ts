/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PropertyServiceService } from './property-service.service';

describe('Service: PropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyServiceService]
    });
  });

  it('should ...', inject([PropertyServiceService], (service: PropertyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
