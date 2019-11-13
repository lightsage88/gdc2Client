import { Component, OnInit, Input } from '@angular/core';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-kennel-card',
  templateUrl: './kennel-card.component.html',
  styleUrls: ['./kennel-card.component.css']
})
export class KennelCardComponent implements OnInit {
  @Input() catData: any;
  public isCollapsed = true;
  cardHeaderId: any;
  buttonDataTarget: any;
  catBreed: any;
  catColor: any;

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    console.log('balaclava');
    this.cardHeaderId = this.catData.id + "-heading";
    this.buttonDataTarget = "#" + this.catData.id + "-collapse"
    this.catBreed =  this.catData.breeds && this.catData.breeds.primary !== undefined ? this.catData.breeds.primary : "N/A";
    this.catColor = this.catData.colors && this.catData.colors.primary !== undefined ? this.catData.colors.primary : "N/A";
    console.log(this.cardHeaderId, this.buttonDataTarget);

  }

  removeCat(): void {
    console.log(this.catData);
    this.dbService.removeCatFromDB(this.catData.id)
  }


}
