/* tslint:disable:no-unused-variable */
import { CatComponent } from './cat.component'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

describe('CatComponent', () => {
  let component: CatComponent
  let fixture: ComponentFixture<CatComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CatComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})