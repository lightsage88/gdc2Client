import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment }  from '../environments/environment';
import {catchError, tap, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import axios from 'axios';
import {NgRedux ,select } from '@angular-redux/store';
import { gdcClientState } from './store';
import { refreshStateWithToken, refreshAuthToken, } from './actions';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

constructor(private http: HttpClient, private ngRedux: NgRedux<gdcClientState>) { }
@select() user$;
username: any;
user: any;
httpOptions = {
  headers: new HttpHeaders({
    "Accept":"application/json"
  })
}
ngOnInit() {
  this.user$.subscribe(user => this.username = user.username);

}
  
  obtainAndRefreshTokenAndState(){

    let authToken = localStorage.getItem('authToken');
    if(authToken) {
        //if we have an authToken, that means we have already signed in. So we want to 
        //get our user info back.

        this.ngRedux.dispatch<any>(refreshStateWithToken(authToken));




        this.user$.subscribe(user => {
          console.log(user);
          this.user = user
          console.log(this.user);
        });
        console.log(this.user);

        // const token = authToken;
        // console.log(token);
        // this.ngRedux.dispatch<any>(setAuthToken(token));
        // // this.ngRedux.dispatch<any>(refreshAuthToken(this.storeTokenFromObservable));
        this.ngRedux.dispatch<any>(refreshAuthToken(authToken, this.user))

    }
  } 


  addCatToDB(cat) {
    this.user$.subscribe(user => this.username = user.username);

    console.log('addCatToDb runnung');
    console.log(this.username);
    console.log(cat);
    // return this.http.post<any>(`${environment.API_BASE_URL}/api/users/addCat`, cat, this.httpOptions)
    // .pipe(
    
    // )
    return axios({
      url: `${environment.API_BASE_URL}/api/users/addCat`,
      method: "POST",
      headers: {
        accept: "application/json"
      },
      data: {
        cat,
        username: this.username
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => console.error(err));
    
  }

  removeCatFromDB(thing) {
console.log(thing);
    console.log(this.user.username);
    console.log('placeholder for Rmovecat fromd b');
  }
}
