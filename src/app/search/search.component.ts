import { Component, OnInit } from '@angular/core';
import {PetFinderService} from '../pet-finder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private petFinderService: PetFinderService) { }
   
  catBreeds;
  catCoats;
  catColors;
  catGenders;
  catAges: string[] = ['baby', 'young', 'adult', 'senior'];
  query: {} = {
    breeds: [],
    coats: [],
    colors: [],
    genders: []
  }
  


  ngOnInit() {
    this.catBreeds = this.petFinderService.getCatBreeds();
    this.catCoats = this.petFinderService.getCatColorCoatSex().then(res =>  
      res.coats );
    this.catColors = this.petFinderService.getCatColorCoatSex().then(res => res.colors);
    this.catGenders = this.petFinderService.getCatColorCoatSex().then(res => res.genders);
  }


  onSubmit(x) {
    console.log('seekCats running');
    console.log(x);
    console.log(x.value);
    console.log(this.coatsDiv);

  }




}
