import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { CatComponent } from './cat/cat.component';
import { KennelComponent } from './kennel/kennel.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';



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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
