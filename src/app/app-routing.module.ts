import { NgModule } from '@angular/core'
import { CatComponent } from './cat/cat.component'
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'
import { KennelComponent } from './kennel/kennel.component'
import { SearchComponent } from './search/search.component'
import { SignupComponent } from './signup/signup.component'
import { AccountComponent } from './account/account.component'
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component'

const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'about', component: AboutComponent},
{path: 'login', component: LoginComponent},
{path: 'search', component: SearchComponent},
{path: 'signup', component: SignupComponent},
{path: 'kennel', component: KennelComponent},
{path: 'account', component: AccountComponent},
{path: 'cat/:idOfCat', component: CatComponent},
{path: "**", component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }