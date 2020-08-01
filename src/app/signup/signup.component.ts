import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import { signUp } from '../actions';
import { gdcClientState } from '../store';
import {Observable, asyncScheduler} from 'rxjs';
import { User } from '../user';
import { AppToastService } from '../app-toast-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private ngRedux: NgRedux<gdcClientState>, 
    private toastService: AppToastService,
    private router: Router) { }
  @select() user$: Observable<User>;
  user: any;
  model: any = {

  };

  submitDisabled: boolean = true;

  ngOnInit() {
    
  }

  manageNewUser() {
    this.user$.subscribe(user => this.user = user);
    if(this.user.loggedIn) {
      this.toastService.show("Grab Dat Cat", "Login Successful!", {classname: 'bg-success text-light', delay: 5000});
      setTimeout(()=>{
        this.router.navigate(['/search']);
      }, 2000)
        localStorage.removeItem('validAccountCreation')
    }
  }

  onSubmit(e){
    console.log('onSubmit', e)
    e.preventDefault()
    console.log(this.model);
    console.log('you pressed on Submit');
    this.ngRedux.dispatch(signUp(this.model));
    //
    setTimeout(() => {
      if(localStorage.getItem('validAccountCreation') === "true") {
        console.log('our localStorage has the bit')
        this.manageNewUser()
      }

      if(localStorage.getItem('signupErrorMessage')){ 
        this.toastService.show("Grab Dat Cat", localStorage.getItem('signupErrorMessage'), {classname:'bg-danger text-light', delay: 5000})
        localStorage.removeItem('signupErrorMessage')
      }
    }, 5000)
  }

}
