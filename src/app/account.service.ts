import {Observable} from 'rxjs'
import { gdcClientState } from './store'
import { Injectable } from '@angular/core'
import {NgRedux ,select } from '@angular-redux/store'

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(private ngRedux: NgRedux<gdcClientState>) { }
  @select() user$: Observable<any>
  user: any

  ngOnInit(){
    this.user$.subscribe(user => this.user = user);
  }
}
