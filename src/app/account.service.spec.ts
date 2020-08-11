/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CatComponent } from './cat/cat.component';
import { AccountService } from './account.service';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KennelComponent } from './kennel/kennel.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';
import { TestBed, async, inject } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxTestingModule } from '@angular-redux/store/testing';
import { KennelCardComponent } from './kennel-card/kennel-card.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

describe('Service: Account', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent, LoginComponent, AccountComponent, KennelComponent, KennelCardComponent, CatComponent, SearchComponent, SignupComponent, PageNotFoundComponent  ],
      providers: [AccountService],
      imports: [NgReduxTestingModule, FormsModule, ReactiveFormsModule, NgbModule],
      schemas:[NO_ERRORS_SCHEMA]
    })
  })

  it('should ...', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy()
  }))
})