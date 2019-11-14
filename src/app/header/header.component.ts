import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { gdcClientState } from '../store';
import { logout } from '../actions';
import { RouteHelperService } from '../route-helper.service';
import {AppToastService} from '../app-toast-service.service';
import { User } from '../user';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @select() user$;
  loggedIn: any;
  constructor(private ngRedux: NgRedux<gdcClientState>,
    private routeHelper: RouteHelperService,
  private toastService: AppToastService) { }

  ngOnInit() {
    this.loggedIn = this.user$.subscribe(user => {
       this.loggedIn = user.loggedIn;
      console.log(this.loggedIn);
    });

  }



  logOut() {
    this.ngRedux.dispatch(logout());
    localStorage.clear();
    this.routeHelper.coatCheck();
  }

}
