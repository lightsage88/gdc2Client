import { User } from '../user'
import { Observable } from 'rxjs'
import { signUp } from '../actions'
import { Router } from '@angular/router'
import { gdcClientState } from '../store'
import { Component, OnInit } from '@angular/core'
import { NgRedux, select } from '@angular-redux/store'
import { AppToastService } from '../app-toast-service.service'

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
  }

  submitDisabled: boolean = true

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
    e.preventDefault()
    this.ngRedux.dispatch(signUp(this.model));   
    setTimeout(() => {
      if(localStorage.getItem('validAccountCreation') === "true") {
        this.manageNewUser()
      }
      if(localStorage.getItem('signupErrorMessage')){ 
        this.toastService.show("Grab Dat Cat", localStorage.getItem('signupErrorMessage'), {classname:'bg-danger text-light', delay: 5000})
        localStorage.removeItem('signupErrorMessage')
      }
    }, 5000)
  }
}