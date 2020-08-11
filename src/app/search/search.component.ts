import { gdcClientState } from '../store'
import { SearchResult } from '../search-result'
import { Component, OnInit } from '@angular/core'
import { AccountService } from '../account.service'
import { NgRedux, select } from '@angular-redux/store'
import { FormGroup, FormControl } from '@angular/forms'
import { PetFinderService } from '../pet-finder.service'
import { RouteHelperService } from '../route-helper.service'

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
  catResults:SearchResult[]
  catBreeds
  catCoats
  catColors
  catGenders
  catAges: string[] = ['baby', 'young', 'adult', 'senior']

  queryForm = new FormGroup({
    breed: new FormControl(''),
    coat: new FormControl(''),
    color: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl('')
  });

  ngOnInit() {
    this.routeHelper.bouncer()
    this.catBreeds = this.petFinderService.getCatBreeds()
    this.catCoats = this.petFinderService.getCatColorCoatSex().then(res =>
      res.coats)
    this.catColors = this.petFinderService.getCatColorCoatSex().then(res => res.colors)
    this.catGenders = this.petFinderService.getCatColorCoatSex().then(res => res.genders)
    this.user$.subscribe(user => this.user = user)
  }

  onSubmit() {
    this.petFinderService.seekCats(this.queryForm.value).subscribe(data => {
      this.catResults = data;
    })
  }
}