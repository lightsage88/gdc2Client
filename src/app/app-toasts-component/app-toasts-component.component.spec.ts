import { NO_ERRORS_SCHEMA } from '@angular/core'
import { AppToastsComponent } from './app-toasts-component.component'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

describe('AppToastsComponent', () => {
  let component: AppToastsComponent
  let fixture: ComponentFixture<AppToastsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppToastsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToastsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})