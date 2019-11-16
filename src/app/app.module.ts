import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';
import thunk  from 'redux-thunk';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { KennelComponent } from './kennel/kennel.component';
import { SearchComponent } from './search/search.component';
import { CatComponent } from './cat/cat.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';


import { gdcClientState, rootReducer, INITIAL_STATE  } from './store';
import { CatResultsComponent } from './cat-results/cat-results.component';
import { SignupComponent } from './signup/signup.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { KennelCardComponent } from './kennel-card/kennel-card.component';
import { AppToastsComponent } from './app-toasts-component/app-toasts-component.component';

import {AppToastService} from './app-toast-service.service';

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
