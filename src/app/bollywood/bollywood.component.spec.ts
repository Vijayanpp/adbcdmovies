/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BollywoodComponent } from './bollywood.component';

describe('BollywoodComponent', () => {
  let component: BollywoodComponent;
  let fixture: ComponentFixture<BollywoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BollywoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BollywoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
