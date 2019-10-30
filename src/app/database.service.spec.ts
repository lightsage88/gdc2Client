/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatabaseService } from './database.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgReduxTestingModule } from '@angular-redux/store/testing';
describe('Service: DatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseService],
      imports: [HttpClientTestingModule, NgReduxTestingModule]
    });
  });

  it('should ...', inject([DatabaseService], (service: DatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
