/* tslint:disable:no-unused-variable */
import { DatabaseService } from '../database.service';
import { CatCardComponent } from './cat-card.component';
import { NgReduxTestingModule } from '@angular-redux/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('CatCardComponent', () => {
  let component: CatCardComponent
  let dbServiceStub : Partial<DatabaseService>
  let fixture: ComponentFixture<CatCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCardComponent ],
      imports: [NgReduxTestingModule, HttpClientTestingModule],
      providers: [ DatabaseService ]
    })
    .compileComponents()
  }))

  // beforeEach(() => {
  //   jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  //   fixture = TestBed.createComponent(CatCardComponent);
  //   component = fixture.componentInstance;
  //   component.catData = {
  //     status: "adoptable",
  //     name: "Felix",
  //     description: "A fine boy",
  //     photos: [],
  //     breeds: {
  //       primary: "American Shorthair"
  //     },
  //     colors: {
  //       primary: "Black"
  //     },
  //     age: "Adult",
  //     gender: "Male"
  //   };
  //   fixture.detectChanges();
  // });
  //
  // it('should create', async(() => {
  //   expect(component).toBeTruthy();
  // }));
  //
  // // it('will call dbService:addCatToDB() when placeCatInKennel() is called', async(()=>{
  // //   fixture = TestBed.createComponent(CatCardComponent);
  // //   component = fixture.componentInstance;
  // //  dbService = new DatabaseService(http: HttpClientTestingModule)
  // //   component.placeCatInKennel();
  //
  // // }))
  //
  // it('will dispatch ngRedux:addCat which has a type of ADD_CAT when placeCatInKennel() is called', async(()=>{
  //   const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
  //   // fixture = TestBed.createComponent(CatCardComponent);
  //   component = fixture.componentInstance;
  //   component.placeCatInKennel();
  //   expect(spy).toHaveBeenCalledWith({
  //     type: 'ADD_CAT', payload: Object({ status: 'adoptable', name: 'Felix', description: 'A fine boy', photos: [  ], breeds: Object({ primary: 'American Shorthair' }), colors: Object({ primary: 'Black' }), age: 'Adult', gender: 'Male' })
  //   });
  //
  //
  // }))
});
