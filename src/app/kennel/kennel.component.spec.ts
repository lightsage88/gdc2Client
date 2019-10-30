/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgReduxTestingModule } from '@angular-redux/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { KennelComponent } from './kennel.component';
import { KennelCardComponent } from '../kennel-card/kennel-card.component';

describe('KennelComponent', () => {
  let component: KennelComponent;
  let fixture: ComponentFixture<KennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennelComponent, KennelCardComponent ],
      imports: [NgReduxTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennelComponent);
    component = fixture.componentInstance;
    component.kennelCats = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
