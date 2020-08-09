/* tslint:disable:no-unused-variable */
import { SearchComponent } from '../search/search.component'
import { CatResultsComponent } from './cat-results.component'
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { CatCardComponent } from '../cat-card/cat-card.component'
import {NgReduxTestingModule} from '@angular-redux/store/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

describe('CatResultsComponent', () => {
  let component: CatResultsComponent
  let fixture: ComponentFixture<CatResultsComponent>
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatResultsComponent, SearchComponent, CatCardComponent ],
      imports: [ FormsModule, ReactiveFormsModule, NgReduxTestingModule, HttpClientTestingModule ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CatResultsComponent)
    component = fixture.componentInstance
    component.catResults = []  
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
