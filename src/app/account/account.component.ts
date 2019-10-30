import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgRedux, select} from '@angular-redux/store';
import {gdcClientState} from '../store';
import {Observable} from 'rxjs';
import { User } from '../user';
import { DatabaseService } from '../database.service';
import { Data } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @select() user$: Observable<User>;
  @select() lastUpdate;
  user: any;
  userAccountInput: {} = {
    firstName: '',
    lastName: '',
    birthday: '',
    username: ""
  }; 
  confirmationInput: {} = {
    password: '',
    confirm: ''
  };

  passwordChangeObject: {} = {
    password: '',
    newPW: ''
  };

  displayModal: boolean = false;

  constructor(private ngRedux: NgRedux<gdcClientState>, private dbService: DatabaseService) {


   }

  ngOnInit() {  
    console.log(this.user, this.lastUpdate, this.userAccountInput);
    this.user$.subscribe(user => this.user = user);

  }

  attemptAccountUpdate() {
    console.log('Here is where we attempt to update the account');
    console.log(this.userAccountInput, this.confirmationInput);
    console.log(this.user.username);
    console.log('be sure to add username to this user object');
    this.dbService.attemptAccountUpdateDB(this.user.username, this.userAccountInput, this.confirmationInput);
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
    console.log(this.passwordChangeObject);
    this.dbService.attemptPasswordUpdate(this.user.username,this.passwordChangeObject)

  }
  

}
