import { Component, OnInit } from '@angular/core';
import {NgRedux } from '@angular-redux/store';
import { gdcClientState } from '../store';
import {LOG_IN} from '../actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials:{} = {
    username: null,
    password: null

  };
  loginFormIsDisabled: boolean = false;
  constructor(private ngRedux: NgRedux<gdcClientState>) { }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.userCredentials);
    this.ngRedux.dispatch(LOG_IN(this.userCredentials));
  }



  



}
