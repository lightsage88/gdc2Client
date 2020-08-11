import thunk  from 'redux-thunk';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { KennelComponent } from './kennel/kennel.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { gdcClientState, rootReducer, INITIAL_STATE  } from './store';
import { KennelCardComponent } from './kennel-card/kennel-card.component';
import { CatResultsComponent } from './cat-results/cat-results.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { AppToastsComponent } from './app-toasts-component/app-toasts-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    AccountComponent,
    LoginComponent,
    KennelComponent,
    SearchComponent,
    CatComponent,
    PageNotFoundComponent,
    CatResultsComponent,
    SignupComponent,
    CatCardComponent,
    KennelCardComponent,
    CatComponent,
    AppToastsComponent
  ],
   imports: [
      ReactiveFormsModule,
      NgReduxModule,
      HttpClientModule,
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      NgbModule
   ],
   schemas: [
     NO_ERRORS_SCHEMA
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<gdcClientState>,
    private devTools: DevToolsExtension){
    let enhancers = [];
    if(devTools.isEnabled()){
      enhancers = [...enhancers, devTools.enhancer()];
    }

    this.ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [thunk],
      enhancers
    )
  }
}