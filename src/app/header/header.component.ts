import { logout } from '../actions';
import { gdcClientState } from '../store';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { RouteHelperService } from '../route-helper.service';
import {AppToastService} from '../app-toast-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @select() user$
  loggedInStatus: boolean = false
  constructor(private ngRedux: NgRedux<gdcClientState>,
  private routeHelper: RouteHelperService,
  private toastService: AppToastService) { }

  ngOnInit() {
    this.user$.subscribe(user => this.loggedInStatus = user.loggedIn)
  }

  logOut() {
    this.ngRedux.dispatch(logout())
    localStorage.clear()
    this.routeHelper.coatCheck()
  }
}