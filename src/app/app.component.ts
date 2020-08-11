import { User } from './user';
import { Observable } from 'rxjs';
import { gdcClientState } from './store';
import { Component } from '@angular/core';
import { DatabaseService } from './database.service';
import { NgRedux, select } from '@angular-redux/store';
import { environment } from '../environments/environment';
import { AppToastService } from './app-toast-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'gdc2Client';
  environment = environment;
  @select() user$:Observable<User>;
  user: any;
  storeTokenFromObservable: string;
  constructor(private ngRedux: NgRedux<gdcClientState>,
  private dbService: DatabaseService,
  public toastService: AppToastService) {
  }

  ngOnInit() {
    this.dbService.obtainAndRefreshTokenAndState();
  }
}