import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {gdcClientState} from '../store';
import {Observable} from 'rxjs';
import { User } from '../user';
import { DatabaseService } from '../database.service';
import { RouteHelperService } from '../route-helper.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @select() user$: Observable<User>
  @select() lastUpdate
  user: any
  userAccountInput: any = {
    firstName: '',
    lastName: '',
    birthday: Object,
    username: ""
  }
  confirmationInput: any = {
    password: '',
    confirm: ''
  }
  passwordChangeObject: any = {
    password: '',
    newPW: ''
  }

  authToken: any
  displayModal: boolean = false
  displayBlockModal: boolean = false

  constructor(private ngRedux: NgRedux<gdcClientState>,
    private dbService: DatabaseService,
    private routeHelper: RouteHelperService
  ) {

   }

  ngOnInit() {
    this.dbService.obtainAndRefreshTokenAndState()
    this.user$.subscribe(user => this.user = user)
    this.user$.subscribe(user => this.userAccountInput.birthday = user.birthday)
    this.authToken = localStorage.getItem('authToken')
    this.routeHelper.bouncer()
  }

  attemptAccountUpdate() {
    this.dbService.attemptAccountUpdateDB(this.user.username, this.userAccountInput, this.confirmationInput)
  }

  onSubmit() {
    this.displayModal = true
  }

  submitPasswordConfirm(){
    this.attemptAccountUpdate()
  }

  closeBlockModal() {
    this.displayBlockModal = false
  }

  attemptPasswordChange() {
    if(this.user.username == "administrator") {
      this.displayBlockModal = true
    } else {
    this.dbService.attemptPasswordUpdate(this.user.username,this.passwordChangeObject)
    }
  }
}