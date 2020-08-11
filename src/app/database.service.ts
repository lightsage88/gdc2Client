import axios from 'axios';
import { gdcClientState } from './store';
import { Injectable } from '@angular/core';
import {NgRedux ,select } from '@angular-redux/store';
import { environment }  from '../environments/environment';
import {AppToastService} from './app-toast-service.service';
import { refreshStateWithToken, refreshAuthToken, } from './actions';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
constructor(private http: HttpClient, 
  private ngRedux: NgRedux<gdcClientState>, 
  private toastService: AppToastService) { }
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
  }

  refreshStateViaToken() {
    let authToken = localStorage.getItem('authToken');
    if(authToken) {
        this.ngRedux.dispatch<any>(refreshStateWithToken(authToken));
    }
  }

  obtainAndRefreshTokenAndState(){
    let authToken = localStorage.getItem('authToken');
    if(authToken) {
      this.ngRedux.dispatch<any>(refreshStateWithToken(authToken));
      this.user$.subscribe(user => {
        this.user = user
      });
      this.ngRedux.dispatch<any>(refreshAuthToken(authToken, this.user))
    }
  }

  addCatToDB(cat) {
    this.user$.subscribe(user => this.username = user.username);
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
    .catch(err => console.error(err));
  }

  removeCatFromDB(catID) {
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
      this.refreshStateViaToken();
    })
    .catch(err => console.error(err));
  }

  attemptPasswordUpdate(username, object) {
    let {password, newPW} = object;
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
      if(response.data.code === 201) {
        this.toastService.show("Grab Dat Cat", "Password Change Successful!", {classname: 'bg-success text-light', delay: 5000});
      }
    })
    .catch(err => console.error(err))
  }

  attemptAccountUpdateDB(username, userInfo, confirmInfo) {
    let { firstName, lastName, birthday, zodiacCombo } = userInfo;
    let {password, confirm} = confirmInfo;
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
      if(response.data.code === 201) {
        this.toastService.show("Grab Dat Cat", "Account Update Successful!", {classname: 'bg-success text-light', delay: 5000});
        setTimeout(()=>{
          window.location.reload();
        }, 1000)
      }
    })
    .catch(err => console.error(err));
  }
}