/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PetFinderService } from './pet-finder.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgReduxTestingModule } from '@angular-redux/store/testing';
describe('Service: PetFinder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetFinderService],
      imports: [HttpClientTestingModule, NgReduxTestingModule]
    });
  });

  it('should ...', inject([PetFinderService], (service: PetFinderService) => {
    expect(service).toBeTruthy();
  }));
});
