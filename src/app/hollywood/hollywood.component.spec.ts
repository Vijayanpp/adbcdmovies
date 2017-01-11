/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HollywoodComponent } from './hollywood.component';

describe('HollywoodComponent', () => {
  let component: HollywoodComponent;
  let fixture: ComponentFixture<HollywoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollywoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollywoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
