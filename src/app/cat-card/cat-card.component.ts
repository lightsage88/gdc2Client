import { Component, OnInit, Input } from '@angular/core';
import {NgRedux, select } from '@angular-redux/store';
import {addCat} from '../actions';
import { gdcClientState } from '../store';
import { User } from '../user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {

  constructor(private ngRedux: NgRedux<gdcClientState>) { }
  @Input() catData: {};
  @select() user$ : Observable<User>;
  user: User;
  ngOnInit() {
    this.user$.subscribe(user => this.user = user);
  }

  placeCatInKennel() {
    console.log(this.catData);
    console.log(this.user);
    console.log(this.user.cats);
    //We want to dispatch an action where we send this catData to our database
    //and put it in the cats array of our User model.

    this.ngRedux.dispatch(addCat(this.catData));

   
  }

}
