import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { gdcClientState } from '../store';
import { logout } from '../actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @select() user;
  constructor(private ngRedux: NgRedux<gdcClientState>) { }

  ngOnInit() {
  }

  logOut() {
    console.log(this.user);
    this.ngRedux.dispatch(logout());
    localStorage.clear();
  }

}
