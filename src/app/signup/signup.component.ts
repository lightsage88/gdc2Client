import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {SIGN_UP} from '../actions';
import { gdcClientState } from '../store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private ngRedux: NgRedux<gdcClientState>) { }

  model = {};

  ngOnInit() {

  }

  checkStuff() {
      console.log(this.model);
  }

  onSubmit(){
    console.log(this.model);
    console.log('you pressed on Submit');
    this.ngRedux.dispatch({type: SIGN_UP(this.model)})
  }

}
