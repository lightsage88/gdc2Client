/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {NgReduxTestingModule, MockNgRedux} from '@angular-redux/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../user'; 
import { Observable } from 'rxjs';

import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      imports: [NgReduxTestingModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
         DatabaseService
      ]
    })
    .compileComponents();
  }));


  beforeEach(()=>{

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    component.user = {
      firstName: "Tom",
      lastName: "Jerry",
      birthday: "Sometime"
    }
    component.userAccountInput = {
      firstName: "John",
      lastName:"Ralphio",
      birthday: "Someday"
    }
    fixture.detectChanges();

  });

  

//   it('should create', async(() => {
//     const fixture = TestBed.createComponent(AccountComponent);
//     fixture.detectChanges();
//     const component = fixture.componentInstance;
//     component.user = {
//       firstName: "Tom",
//       lastName: "Jerry",
//       birthday: "Sometime"
//     }
//     component.userAccountInput = {
//       firstName: "John",
//       lastName:"Ralphio",
//       birthday: "Someday"
//     };
  
//     fixture.detectChanges();
   
    
    

//     expect(component).toBeTruthy();
  
// }));
})
