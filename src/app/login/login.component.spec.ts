/* tslint:disable:no-unused-variable */
import {NO_ERRORS_SCHEMA} from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { NgReduxTestingModule, MockNgRedux} from '@angular-redux/store/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {AppRoutingModule} from '../app-routing.module'
import {AboutComponent} from '../about/about.component'
import {AccountComponent} from '../account/account.component'
import {CatComponent} from '../cat/cat.component'
import {KennelComponent} from '../kennel/kennel.component'
import {SearchComponent} from '../search/search.component'
import {SignupComponent} from '../signup/signup.component'
import {PageNotFoundComponent} from '../pageNotFound/pageNotFound.component'
import {KennelCardComponent} from '../kennel-card/kennel-card.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent, LoginComponent, AccountComponent, KennelComponent, KennelCardComponent, LoginComponent, CatComponent, SearchComponent, SignupComponent, PageNotFoundComponent  ],
      imports: [ NgReduxTestingModule, FormsModule, ReactiveFormsModule, AppRoutingModule, NgbModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
  }))


  it('should create', async(() => {
    const fixture = TestBed.createComponent(LoginComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled).toBeTruthy()
  }))

  it('should have a userCredentials property with two values intially being null', async(()=>{
    const fixture = TestBed.createComponent(LoginComponent)
    fixture.detectChanges()
    const loginComponent = fixture.componentInstance
    expect(loginComponent.userCredentials).toEqual(Object({username: null, password:null}))
  }))

  it('should have a loginFormIsDisabled boolean prop set to false intially', async(()=>{
    const fixture = TestBed.createComponent(LoginComponent)
    fixture.detectChanges()
    const loginComponent = fixture.componentInstance
    expect(loginComponent.loginFormIsDisabled).toEqual(false)
  }))
})