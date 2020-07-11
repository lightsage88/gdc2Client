import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { gdcClientState } from '../store';
import { DatabaseService } from '../database.service';
import {RouteHelperService} from '../route-helper.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-kennel',
  templateUrl: './kennel.component.html',
  styleUrls: ['./kennel.component.css']
})
export class KennelComponent implements OnInit {
  @select() user$: Observable<any>;
  kennelCats: [];
  constructor(private ngRedux: NgRedux<gdcClientState>,
    private dbService: DatabaseService,
  private routeHelper: RouteHelperService) { }

  ngOnInit() {
    this.routeHelper.bouncer();
    // this.dbService.obtainAndRefreshTokenAndState();
    this.user$.subscribe(user => this.kennelCats = user.cats);
  }

}
