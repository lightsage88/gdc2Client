/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DebugElement } from '@angular/core';
import { NgReduxModule, select, NgRedux } from '@angular-redux/store';
import { gdcClientState } from '../store';
import {LoginComponent} from '../login/login.component';
import {AppRoutingModule} from '../app-routing.module';
import {AboutComponent} from '../about/about.component';
import {AccountComponent} from '../account/account.component';
import {CatComponent} from '../cat/cat.component';
import {KennelComponent} from '../kennel/kennel.component';
import {SearchComponent} from '../search/search.component';
import {SignupComponent} from '../signup/signup.component';
import {PageNotFoundComponent} from '../pageNotFound/pageNotFound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MockNgRedux,
  NgReduxTestingModule,
} from '@angular-redux/store/testing';
import { LOG_OUT } from '../actions';

import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let ngRedux: NgRedux<gdcClientState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, LoginComponent, AboutComponent, AccountComponent, CatComponent, KennelComponent, SearchComponent, SignupComponent, PageNotFoundComponent ],
      imports: [NgReduxModule, NgReduxTestingModule, AppRoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));


  it('should create', async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy();
  }));

  it('should have the header with the appropriate links', async(()=>{
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a#aboutLink').textContent).toContain("About");
    // expect(compiled.querySelector('a#accountLink').textContent).toContain("Account");
    expect(compiled.querySelector('a#loginLink').textContent).toContain("Login");
    // expect(compiled.querySelector('a#kennelLink').textContent).toContain("Kennel");
    // expect(compiled.querySelector('a#searchLink').textContent).toContain("Search");
    expect(compiled.querySelector('a#signupLink').textContent).toContain("Sign Up");
    // expect(compiled.querySelector('a#logoutLink').textContent).toContain("Log Out");

  }));

  it('should dispatch "logout" when #logoutLink is clicked', async(()=>{
    const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const headerComponent = fixture.componentInstance;
    headerComponent.logOut();
    expect(spy).toHaveBeenCalledWith({
      type: LOG_OUT
    })

  }));

  it('should clear localStorage when #logoutLink is clicked', async(()=>{
    const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const headerComponent = fixture.componentInstance;
    headerComponent.logOut();
    expect(localStorage.getItem('authToken')).toBe(null);
  }));

  // it('has NgRedux injected', async(()=>{
  //   const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
  //   const fixture = TestBed.createComponent(HeaderComponent);
  //   fixture.detectChanges();
  //   const headerComponent = fixture.componentInstance;

  // }))
});
