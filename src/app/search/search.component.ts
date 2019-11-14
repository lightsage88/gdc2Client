import { Component, OnInit } from '@angular/core';
import {PetFinderService} from '../pet-finder.service';
import {AccountService} from '../account.service';
import {DatabaseService} from '../database.service';
import {RouteHelperService} from '../route-helper.service';
import { NgRedux, select } from '@angular-redux/store';
import { FormGroup, FormControl } from '@angular/forms';
import { gdcClientState } from '../store';
import {Output} from '@angular/core';
import { Observable } from 'rxjs';
import {SearchResult} from '../search-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private petFinderService: PetFinderService,
    private ngRedux: NgRedux<gdcClientState>,
    private accountService: AccountService,
    private routeHelper: RouteHelperService
    ) { }

  @select() user$;
  user: any

  //use @OUTPUT to feed queried cats into search-results child component :)
  catResults:SearchResult[];
  // catSuggestion: any;

  catBreeds;
  catCoats;
  catColors;
  catGenders;
  catAges: string[] = ['baby', 'young', 'adult', 'senior'];
  // query: {} = {
  //   breeds: [],
  //   coats: [],
  //   colors: [],
  //   genders: []
  // }
  queryForm = new FormGroup({
    breed: new FormControl(''),
    coat: new FormControl(''),
    color: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl('')
  });



  ngOnInit() {
    this.routeHelper.bouncer();
    this.catBreeds = this.petFinderService.getCatBreeds();
    this.catCoats = this.petFinderService.getCatColorCoatSex().then(res =>
      res.coats );
    this.catColors = this.petFinderService.getCatColorCoatSex().then(res => res.colors);
    this.catGenders = this.petFinderService.getCatColorCoatSex().then(res => res.genders);
    this.user$.subscribe(user => this.user = user);
    // this.catSuggestion =   this.user.zodiacCombo.catType ? "According to our cat overlords, people with your zodiac sign would pair best with a " + user.zodiacCombo.catType + " cat!": "N/A"


  }





  onSubmit() {

    console.log(this.catResults);
   console.log('pressed ngSubmit for form');
   console.log(this.queryForm.value);
   //we want to import an action or a thunk-action that will ping
   //petfinder's api with our desired cat-tributes ;)

    this.petFinderService.seekCats(this.queryForm.value).subscribe(data => {
      console.log(data);
      // this.catResults = JSON.stringify(data);
      // this.catResults = JSON.parse(this.catResults);
      // this.catResults = JSON.parse(JSON.stringify(data));
      this.catResults = data;
    });

   console.log(this.catResults);

  }





}
