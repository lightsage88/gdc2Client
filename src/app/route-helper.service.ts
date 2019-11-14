import { Injectable } from '@angular/core';
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RouteHelperService {

  constructor(private router: Router) { }


//A function that runs on the ngInit of several components which boots people
//if they aren't signed in which should be apparent by the presence of an
//authToken in localStorage

  bouncer() {
    //checks for authToken like an ID at the club
    localStorage.getItem('authToken') ? null : this.router.navigate(['/about']);
  }

  coatCheck(){
    //like when you get your coat from a fancy place before leaving.
    //So we're going to make sure that our localStorage is empty, though I'm sure this is handled already.
    //and then we will re-route our friends to /about
    this.router.navigate(['/about']);
  }

}
