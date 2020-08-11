/* tslint:disable:no-unused-variable */
import { SearchComponent } from './search.component'
import { PetFinderService } from '../pet-finder.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgReduxTestingModule } from '@angular-redux/store/testing'
import { CatCardComponent } from '../cat-card/cat-card.component'
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CatResultsComponent } from '../cat-results/cat-results.component'

describe('SearchComponent', () => {
  let component: SearchComponent
  let fixture: ComponentFixture<SearchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, CatResultsComponent, CatCardComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, NgReduxTestingModule],
      providers: [PetFinderService]
    })
    .compileComponents()
  })) 

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
})