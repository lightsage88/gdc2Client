import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgReduxTestingModule, MockNgRedux} from '@angular-redux/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent
  let fixture: ComponentFixture<AccountComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      imports: [NgReduxTestingModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
         DatabaseService
      ]
    })
    .compileComponents();
  }))

  beforeEach(()=>{
    fixture = TestBed.createComponent(AccountComponent)
    component = fixture.componentInstance
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
    fixture.detectChanges()
  });
})
