import { TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { RouteHelperService } from './route-helper.service';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {AccountComponent} from './account/account.component';
import {CatComponent} from './cat/cat.component';
import {KennelComponent} from './kennel/kennel.component';
import {SearchComponent} from './search/search.component';
import {SignupComponent} from './signup/signup.component';
import {PageNotFoundComponent} from './pageNotFound/pageNotFound.component';
import {KennelCardComponent} from './kennel-card/kennel-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





describe('RouteHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ AboutComponent, LoginComponent, AccountComponent, KennelComponent, KennelCardComponent, CatComponent, SearchComponent, SignupComponent, PageNotFoundComponent  ],
    imports: [AppRoutingModule, FormsModule, ReactiveFormsModule, NgbModule],
    schemas: [NO_ERRORS_SCHEMA]
  }));

  it('should be created', () => {
    const service: RouteHelperService = TestBed.get(RouteHelperService);
    expect(service).toBeTruthy();
  });
});
