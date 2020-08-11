import { NO_ERRORS_SCHEMA } from '@angular/core'
import { AppComponent } from './app.component'
import { APP_BASE_HREF } from '@angular/common'
import { CatComponent } from './cat/cat.component'
import { NgReduxModule } from '@angular-redux/store'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule, Routes } from '@angular/router'
import { TestBed, async } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'
import { BrowserModule } from '@angular/platform-browser'
import { HeaderComponent } from './header/header.component'
import { KennelComponent } from './kennel/kennel.component'
import { SearchComponent } from './search/search.component'
import { SignupComponent } from './signup/signup.component'
import { RouterTestingModule } from '@angular/router/testing'
import { AccountComponent } from './account/account.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CatCardComponent } from './cat-card/cat-card.component'
import { CatResultsComponent } from './cat-results/cat-results.component'
import { KennelCardComponent } from './kennel-card/kennel-card.component'
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component'
import { AppToastsComponent } from './app-toasts-component/app-toasts-component.component'

describe('AppComponent', () => {
  const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'about', component: AboutComponent },
    {path: 'login', component: LoginComponent },
    {path: 'search', component: SearchComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'kennel', component: KennelComponent },
    {path: 'account', component: AccountComponent},
    {path: 'cat/:idOfCat', component: CatComponent},
    {path: "**", component: PageNotFoundComponent }
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
    })
    .compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  it('should have the title', async(()=>{
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('gdc2Client')
  }))

  it(`should have as title 'gdc2Client'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('gdc2Client')
  })
})