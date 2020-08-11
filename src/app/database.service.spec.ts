/* tslint:disable:no-unused-variable */

import { DatabaseService } from './database.service'
import { TestBed, async, inject } from '@angular/core/testing'
import { NgReduxTestingModule } from '@angular-redux/store/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('Service: DatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseService],
      imports: [HttpClientTestingModule, NgReduxTestingModule]
    })
  })

  it('should ...', inject([DatabaseService], (service: DatabaseService) => {
    expect(service).toBeTruthy()
  }))
})