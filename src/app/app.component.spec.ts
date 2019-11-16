import {NO_ERRORS_SCHEMA} from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule } from '@angular-redux/store';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { CatComponent } from './cat/cat.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { CatResultsComponent } from './cat-results/cat-results.component';
import { HeaderComponent } from './header/header.component';
import { KennelComponent } from './kennel/kennel.component';
import { KennelCardComponent } from './kennel-card/kennel-card.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import {AppToastsComponent} from './app-toasts-component/app-toasts-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



describe('AppComponent', () => {
  const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'about', component: AboutComponent },
    {path: 'account', component: AccountComponent},
    {path: 'cat/:idOfCat', component: CatComponent},
    {path: 'kennel', component: KennelComponent },
    {path: 'login', component: LoginComponent },
    {path: 'search', component: SearchComponent},
    {path: 'signup', component: SignupComponent},

    {path: "**", component: PageNotFoundComponent }
    //ours is a bit different from the instructions, if there're problems, consult guide.
  ]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule,
      NgReduxModule,
      HttpClientModule,
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      NgbModule
      ],
      declarations: [
        AboutComponent,
        AppComponent,
        AppToastsComponent,
        AccountComponent,
        CatComponent,
        CatCardComponent,
        CatResultsComponent,
        HeaderComponent,
        KennelComponent,
        KennelCardComponent,
        LoginComponent,
        PageNotFoundComponent,
        SearchComponent,
        SignupComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));



  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have the title', async(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('gdc2Client');
  }));

  it(`should have as title 'gdc2Client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('gdc2Client');
  });



});
