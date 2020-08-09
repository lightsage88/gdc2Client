import { User } from '../user'
import { Observable } from 'rxjs'
import {addCat} from '../actions'
import { gdcClientState } from '../store'
import { DatabaseService } from '../database.service'
import {NgRedux, select } from '@angular-redux/store'
import { Component, OnInit, Input } from '@angular/core'
import {AppToastService} from '../app-toast-service.service'

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})

export class CatCardComponent implements OnInit {
  constructor(private ngRedux: NgRedux<gdcClientState>,
    private dbService: DatabaseService,
    private toastService: AppToastService) { }
    @Input() catData: any
    @select() user$ : Observable<User>
    user: User
    showToast: boolean = true
    ngOnInit() {
      this.user$.subscribe(user => this.user = user);
    }

  placeCatInKennel() {
    this.dbService.addCatToDB(this.catData)
    this.ngRedux.dispatch(addCat(this.catData))
    let toastBody = this.catData.name + " was added to the kennel!"
    this.toastService.show('Grab Dat Cat', toastBody, {classname: 'bg-success text-light', delay: 5000})
  }
}
