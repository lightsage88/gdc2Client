import {NgRedux ,select } from '@angular-redux/store';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { gdcClientState } from './store';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(private ngRedux: NgRedux<gdcClientState>) { }
@select() user$: Observable<any>;
user: any;


  ngOnInit(){
    this.user$.subscribe(user => this.user = user);
    console.log(this.user);
  }

  xolo(){
    console.log(this.user);
  }

}
