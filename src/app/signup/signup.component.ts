import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import { signUp } from '../actions';
import { gdcClientState } from '../store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private ngRedux: NgRedux<gdcClientState>) { }

  model: any = {

  };

  submitDisabled: boolean = true;

  ngOnInit() {

  }

  onSubmit(e){
    console.log('onSubmit', e)
    e.preventDefault()
    console.log(this.model);
    console.log('you pressed on Submit');
    // this.ngRedux.dispatch({type: SIGN_UP(this.model)});
    this.ngRedux.dispatch(signUp(this.model));
  }

}
