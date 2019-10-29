/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgReduxTestingModule, MockNgRedux} from '@angular-redux/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { logIn, LOG_IN_SUCCESS } from '../actions';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ NgReduxTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));
 
  

  it('should create', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy();
  }));

  it('should have a userCredentials property with two values intially being null', async(()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const loginComponent = fixture.componentInstance;
    expect(loginComponent.userCredentials).toEqual(Object({username: null, password:null}));
  }));

  it('should have a loginFormIsDisabled boolean prop set to false intially', async(()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const loginComponent = fixture.componentInstance;
    expect(loginComponent.loginFormIsDisabled).toEqual(false);
  }));

  it('should dispatch LOG_IN', async(()=>{
    const spy = spyOn(MockNgRedux.getInstance(), "dispatch");
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const loginComponent = fixture.componentInstance;
     
    
    loginComponent.onSubmit();
    //TODO: "Figure out how to test thunks"
    expect(spy).not.toHaveBeenCalledWith({
      type: LOG_IN_SUCCESS,
    })
  }))


});
