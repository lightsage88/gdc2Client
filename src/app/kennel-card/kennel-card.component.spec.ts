/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KennelCardComponent } from './kennel-card.component';

describe('KennelCardComponent', () => {
  let component: KennelCardComponent;
  let fixture: ComponentFixture<KennelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
