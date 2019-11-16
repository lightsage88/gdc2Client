/* tslint:disable:no-unused-variable */

import {NO_ERRORS_SCHEMA} from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { AccountService } from './account.service';
import { NgReduxTestingModule } from '@angular-redux/store/testing';
import {AboutComponent} from './about/about.component';
import {AccountComponent} from './account/account.component';
import {CatComponent} from './cat/cat.component';
import {KennelComponent} from './kennel/kennel.component';
import {SearchComponent} from './search/search.component';
import {SignupComponent} from './signup/signup.component';
import {PageNotFoundComponent} from './pageNotFound/pageNotFound.component';
import {KennelCardComponent} from './kennel-card/kennel-card.component';
import {LoginComponent} from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






describe('Service: Account', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent, LoginComponent, AccountComponent, KennelComponent, KennelCardComponent, CatComponent, SearchComponent, SignupComponent, PageNotFoundComponent  ],

      providers: [AccountService],
      imports: [NgReduxTestingModule, FormsModule, ReactiveFormsModule, NgbModule],
      schemas:[NO_ERRORS_SCHEMA]
    });
  });

  it('should ...', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
});
