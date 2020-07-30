import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgRedux, select} from '@angular-redux/store';
import {gdcClientState} from '../store';
import {Observable} from 'rxjs';
import { User } from '../user';
import { DatabaseService } from '../database.service';
import { Data } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteHelperService } from '../route-helper.service';
import {refreshStateWithToken} from '../actions';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @select() user$: Observable<User>;
  @select() lastUpdate;
  user: any;
  userAccountInput: any = {
    firstName: '',
    lastName: '',
    birthday: Object,
    username: ""
  };
  confirmationInput: any = {
    password: '',
    confirm: ''
  };

  passwordChangeObject: any = {
    password: '',
    newPW: ''
  };

  authToken: any;

  displayModal: boolean = false;

  constructor(private ngRedux: NgRedux<gdcClientState>,
    private dbService: DatabaseService,
    private routeHelper: RouteHelperService
  ) {


   }

  ngOnInit() {
    this.dbService.obtainAndRefreshTokenAndState();

    console.log(this.user, this.lastUpdate, this.userAccountInput);
    this.user$.subscribe(user => this.user = user);
    // this.user$.subscribe(user => this.authTokenFromState = user.authToken)
    this.user$.subscribe(user => this.userAccountInput.birthday = user.birthday);

    this.authToken = localStorage.getItem('authToken');
    this.routeHelper.bouncer();

  }

  //create a cat-service to set up the zodiacCombo Client Side for easy updating
    //use cat-service here to make the zodiacCombo

  attemptAccountUpdate() {
    console.log('Here is where we attempt to update the account');
    console.log(this.userAccountInput, this.confirmationInput);
    console.log(this.user.username);
    console.log('be sure to add username to this user object');
    this.dbService.attemptAccountUpdateDB(this.user.username, this.userAccountInput, this.confirmationInput);
    // this.ngRedux.dispatch(refreshStateWithToken(this.authToken));


  }



  onSubmit() {
    this.displayModal = true;
    console.log(this.userAccountInput);
  }

  submitPasswordConfirm(){
    console.log(this.confirmationInput);
    this.attemptAccountUpdate() ;
  }

  attemptPasswordChange() {
    console.log('Kendrick Lamar')
    console.log(this.passwordChangeObject);
    this.dbService.attemptPasswordUpdate(this.user.username,this.passwordChangeObject)

  }


}
