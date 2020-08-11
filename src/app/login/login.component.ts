import { Component, OnInit } from '@angular/core'
import {NgRedux } from '@angular-redux/store'
import { gdcClientState } from '../store'
import {logIn} from '../actions'
import {Router} from '@angular/router'
import {AppToastService} from '../app-toast-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userCredentials: any = {
    username: null,
    password: null
  }
  word: string

  loginFormIsDisabled: boolean = false;
  constructor(private ngRedux: NgRedux<gdcClientState>,
  private router: Router,
  private toastService: AppToastService) { }

  ngOnInit() {
  }

  toastSuccessAndRedirect(){
    this.toastService.show("Grab Dat Cat", "Login Successful!", {classname: 'bg-success text-light', delay: 5000});
    setTimeout(()=>{
      this.router.navigate(['/search'])
    }, 2000)
  }

  onSubmit(){
    console.log(this.userCredentials);
    this.ngRedux.dispatch(logIn(this.userCredentials)).then(()=>{
      localStorage.getItem('authToken') ? this.toastSuccessAndRedirect() : this.toastService.show("Grab Dat Cat", "Login Failed", {classname: 'bg-danger text-light', delay: 5000} );
    });
  }
}