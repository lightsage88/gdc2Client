import { Component, OnInit, Input } from '@angular/core';
import {DatabaseService} from '../database.service';
import {AppToastService} from '../app-toast-service.service';

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

  constructor(private dbService: DatabaseService, private toastService: AppToastService) { }

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
    let toastBody = this.catData.name + " was removed.";

    this.toastService.show('Grab Dat Cat', toastBody, {classname: 'bg-danger text-light', delay: 5000});
    // this.toastService.remove()
  }


}
