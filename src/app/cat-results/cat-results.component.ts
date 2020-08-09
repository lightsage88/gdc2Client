import { Input } from '@angular/core';
import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-cat-results',
  templateUrl: './cat-results.component.html',
  styleUrls: ['./cat-results.component.css']
})

export class CatResultsComponent implements OnInit {
  @Input() catResults;
  constructor() { }

  ngOnInit() {
  }
}