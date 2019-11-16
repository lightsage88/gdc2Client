/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgReduxTestingModule } from '@angular-redux/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { KennelComponent } from './kennel.component';
import { KennelCardComponent } from '../kennel-card/kennel-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Router } from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import {LoginComponent} from '../login/login.component';
import {RouteHelperService} from '../route-helper.service';
import {AboutComponent} from '../about/about.component';
import {AccountComponent} from '../account/account.component';
import {CatComponent} from '../cat/cat.component';
import {SearchComponent} from '../search/search.component';
import {SignupComponent} from '../signup/signup.component';
import {PageNotFoundComponent} from '../pageNotFound/pageNotFound.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('KennelComponent', () => {
  let component: KennelComponent;
  let fixture: ComponentFixture<KennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennelComponent, KennelCardComponent, LoginComponent, AboutComponent, AccountComponent, CatComponent, SearchComponent, SignupComponent, PageNotFoundComponent ],
      imports: [NgReduxTestingModule, HttpClientTestingModule, NgbModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
      providers: [RouteHelperService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennelComponent);
    component = fixture.componentInstance;
    component.kennelCats = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
