import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {gdcClientState} from '../store';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @select() user: any;
  @select() lastUpdate;
  constructor(private ngRedux: NgRedux<gdcClientState>) { }

  ngOnInit() {  
    console.log(this.user, this.lastUpdate)
  }

}
