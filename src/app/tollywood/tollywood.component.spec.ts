/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TollywoodComponent } from './tollywood.component';

describe('TollywoodComponent', () => {
  let component: TollywoodComponent;
  let fixture: ComponentFixture<TollywoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TollywoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TollywoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
