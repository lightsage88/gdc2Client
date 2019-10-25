import { Component, OnInit } from '@angular/core';
import {PetFinderService} from '../pet-finder.service';
import { NgRedux } from '@angular-redux/store';
import { FormGroup, FormControl } from '@angular/forms';
import { gdcClientState } from '../store';
import {Output} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
}) 
export class SearchComponent implements OnInit {
  constructor(private petFinderService: PetFinderService, private ngRedux: NgRedux<gdcClientState>) { }
  
  //use @OUTPUT to feed queried cats into search-results child component :)
catResults;
  
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
    this.catBreeds = this.petFinderService.getCatBreeds();
    this.catCoats = this.petFinderService.getCatColorCoatSex().then(res =>  
      res.coats );
    this.catColors = this.petFinderService.getCatColorCoatSex().then(res => res.colors);
    this.catGenders = this.petFinderService.getCatColorCoatSex().then(res => res.genders);
    

    this.petFinderService.tutorialFunction();
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
