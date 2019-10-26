import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Input } from '@angular/core';
import { select } from '@angular-redux/store';
import { gdcClientState } from '../store';

@Component({
  selector: 'app-cat-results',
  templateUrl: './cat-results.component.html',
  styleUrls: ['./cat-results.component.css']
})
export class CatResultsComponent implements OnInit {
  @Input() catResults;
  changeLog: string[] = [];
  constructor() { }

  ngOnInit() {
    console.log('cat results reporting in');
    console.log(this.catResults);
  }

 

}
