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
  this.user$.subscribe(user => this.user = user);


  console.log(this.user);
}



  refreshStateViaToken() {
     let authToken = localStorage.getItem('authToken');
    if(authToken) {
        //if we have an authToken, that means we have already signed in. So we want to
        //get our user info back.

        this.ngRedux.dispatch<any>(refreshStateWithToken(authToken));
    }

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
      console.log('fear tactic', response)
    })
    .catch(err => console.error(err));

  }

  removeCatFromDB(catID) {
    console.log('removeCatFromDB running yo', this.user.username, catID);
    console.log('placeholder for Rmovecat fromd b');
    return axios({
      url: `${environment.API_BASE_URL}/api/users/removeCat`,
      method: "POST",
      headers: {
        accept: "application/json"
      },
      data: {
        catID,
        username: this.user.username
      }
    })
    .then(response => {
      console.log(response);
      this.refreshStateViaToken();
    })
    .catch(err => console.error(err));
  }

  attemptPasswordUpdate(username, object) {
    let {password, newPW} = object;
    console.log(password, newPW)
    return axios({
      url: `${environment.API_BASE_URL}/api/users/changePassword`,
      method: "POST",
      headers: {
        "accept":"application/json"
      },
      data: {
        username,
        "oldPW": password,
        "newPW": newPW
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => console.error(err))
  }

  attemptAccountUpdateDB(username, userInfo, confirmInfo) {
    console.log('attemptAccountUpdateDB running');
    let { firstName, lastName, birthday, zodiacCombo } = userInfo;
    let {password, confirm} = confirmInfo;
    console.log(username, userInfo, confirmInfo)
    return axios({
      url: `${environment.API_BASE_URL}/api/users/changeAccountDetails`,
      method: "POST",
      headers: {
        accept: "application/json"
      },
      data: {
        firstName, lastName, birthday, password, confirm, username, zodiacCombo
      }

    })
    .then(response => {
      console.log(response)
    })
    .catch(err => console.error(err));
  }
}
