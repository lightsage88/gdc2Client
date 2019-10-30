/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';
import { CatResultsComponent } from '../cat-results/cat-results.component';
import { CatCardComponent } from '../cat-card/cat-card.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NgReduxTestingModule} from '@angular-redux/store/testing';
import { PetFinderService } from '../pet-finder.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, CatResultsComponent, CatCardComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, NgReduxTestingModule],
      providers: [PetFinderService]
    })
    .compileComponents();
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Need to figure out how to mock

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
