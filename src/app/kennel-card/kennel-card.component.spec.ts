/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PetFinderService } from '../pet-finder.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { KennelCardComponent } from './kennel-card.component';
import { KennelComponent } from '../kennel/kennel.component';
import { NgReduxTestingModule } from '@angular-redux/store/testing';
import { DatabaseService } from '../database.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

describe('KennelCardComponent', () => {
  let component: KennelCardComponent;
  let fixture: ComponentFixture<KennelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennelCardComponent, KennelComponent ],
      imports: [ HttpClientTestingModule, NgReduxTestingModule, NgbModule],
      providers: [DatabaseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennelCardComponent);
    component = fixture.componentInstance;
    component.catData = {
      name: "Neemo",
      photos: [],
      age: "Adult",
      gender: "Male",
      colors: {
        primary: "Tuxedo"
      },
      breeds: {
        primary: "American Shorthair"
      },
      coat: "Short",
      status: "adoptable",
      description: "A fine boi"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should fire dbService:removeCatFromDB when removeCat() is called', async(()=>{
  //   component.removeCat();
  //   expect()
  // }));
});
