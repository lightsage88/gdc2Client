// /* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { NgReduxTestingModule, MockNgRedux} from '@angular-redux/store/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {NgbDate, NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {Router} from '@angular/router';
// import {AppRoutingModule} from '../app-routing.module';
// import {LoginComponent} from '../login/login.component'



// import { DebugElement } from '@angular/core';

// import { SignupComponent } from './signup.component';
// import { AboutComponent } from '../about/about.component';

// describe('SignupComponent', () => {
//   let component: SignupComponent;
//   let fixture: ComponentFixture<SignupComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SignupComponent, LoginComponent, AboutComponent ],
//       imports: [NgReduxTestingModule, FormsModule, ReactiveFormsModule, NgbModule, AppRoutingModule],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SignupComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', async(() => {
//     //     fixture = TestBed.createComponent(SignupComponent);
//     // component = fixture.componentInstance;
//     // fixture.detectChanges();

//     expect(component).toBeTruthy();
//   }));


//   it('should have a property called model, which starts as an empty object', async(()=>{
//     const fixture = TestBed.createComponent(SignupComponent);
//     fixture.detectChanges();
//     const signupComponent = fixture.componentInstance;
//     expect(signupComponent.model).toEqual(Object({}));
//   }));

//   it('should have a button with SIGNUP & LOGIN as text', async(()=>{
//     const fixture = TestBed.createComponent(SignupComponent);
//     fixture.detectChanges();
//     const signupComponent = fixture.componentInstance;
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('button').textContent).toEqual("SIGNUP & LOGIN");
//     fixture.detectChanges();
//     // expect(signupComponent.onSubmit).toHaveBeenCalled();
//   }));

//   it('should have labels in the form', async(()=>{
//     const fixture = TestBed.createComponent(SignupComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('label#usernameLabel').textContent).toEqual("Username: ");
//     expect(compiled.querySelector('label#passwordLabel').textContent).toEqual("Password: ");
//     expect(compiled.querySelector('label#retypePasswordLabel').textContent).toEqual("Re-Type Password: ");
//     expect(compiled.querySelector('label#firstNameLabel').textContent).toEqual("First Name: ");
//     expect(compiled.querySelector('label#lastNameLabel').textContent).toEqual("Last Name: ");
//     expect(compiled.querySelector('label#birthdayLabel').textContent).toEqual("Birthday: ");
//     expect(compiled.querySelector('label#usernameLabel').textContent).toEqual("Username: ");
//   }));

//   it('should have inputs in a form', async(()=>{
//     const fixture = TestBed.createComponent(SignupComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('input#usernameInput').placeholder).toEqual("Enter your username");
//     expect(compiled.querySelector('input#passwordInput').placeholder).toEqual("Enter your password");
//     expect(compiled.querySelector('input#confirmInput').placeholder).toEqual("Re-enter your password");
//     expect(compiled.querySelector('input#firstNameInput').placeholder).toEqual("Enter your first name");
//     expect(compiled.querySelector('input#lastNameInput').placeholder).toEqual("Enter your last name");
//     expect(compiled.querySelector('input#birthdayInput').placeholder).toEqual("When's your birthday?");

//   }));


//   // it('calling onSubmit() will cause dispatch to be fired', async(()=>{
//   //   const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
//   //   const fixture = TestBed.createComponent(SignupComponent);
//   //   fixture.detectChanges();
//   //   const signupComponent = fixture.componentInstance;
//   //   fixture.detectChanges();
//   //   signupComponent.onSubmit();
//   //   expect(spy).toHaveBeenCalled(); 
//   // }))


// });
