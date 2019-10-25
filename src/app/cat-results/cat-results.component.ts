import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Input } from '@angular/core';

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

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
    console.log(this.changeLog);
  }

}
