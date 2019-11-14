import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import { NgRedux, select } from '@angular-redux/store';
import { gdcClientState } from './store';
import { User } from './user';
import { Observable } from 'rxjs';
import {refreshStateWithToken, loadAuthToken, setAuthToken, refreshAuthToken} from './actions';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gdc2Client';
  environment = environment;
  @select() user$:Observable<User>;
  user: any;
  storeTokenFromObservable: string;
  constructor(private ngRedux: NgRedux<gdcClientState>,
    private dbService: DatabaseService) {

  }


  ngOnInit() {
    this.dbService.obtainAndRefreshTokenAndState();
          // // console.log(localStorage.getItem('authToken'));
          // // let token = localStorage.getItem('authToken') !== undefined ? localStorage.getItem('authToken') : '';
          // // token !== '' ?
          // // this.ngRedux.dispatch<any>(refreshStateWithToken(token))
          // // :
          // // ''



          // // let authToken = this.ngRedux.dispatch<any>(loadAuthToken());
          // let authToken = localStorage.getItem('authToken');
          // if(authToken) {
          //     //if we have an authToken, that means we have already signed in. So we want to
          //     //get our user info back.

          //     this.ngRedux.dispatch<any>(refreshStateWithToken(authToken));




          //     this.user$.subscribe(user => {
          //       console.log(user);
          //       this.user = user
          //       console.log(this.user);
          //     });
          //     console.log(this.user);

          //     // const token = authToken;
          //     // console.log(token);
          //     // this.ngRedux.dispatch<any>(setAuthToken(token));
          //     // // this.ngRedux.dispatch<any>(refreshAuthToken(this.storeTokenFromObservable));
          //     this.ngRedux.dispatch<any>(refreshAuthToken(authToken, this.user))
          // }

  }
}
