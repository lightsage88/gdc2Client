import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';
import thunk  from 'redux-thunk';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
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
      CatCardComponent
   ],
   imports: [
      ReactiveFormsModule,
      NgReduxModule,
      HttpClientModule,
      BrowserModule,
      FormsModule,
      AppRoutingModule
   ],
   providers: [],
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
