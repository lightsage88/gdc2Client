import { Component, OnInit, Input } from '@angular/core';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-kennel-card',
  templateUrl: './kennel-card.component.html',
  styleUrls: ['./kennel-card.component.css']
})
export class KennelCardComponent implements OnInit {
  @Input() catData: any;
  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
  }

  removeCat(): void {
    console.log(this.catData);
    this.dbService.removeCatFromDB(this.catData.id)
  }


}
