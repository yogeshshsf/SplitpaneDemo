import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondmenuPage } from './secondmenu.page';

describe('SecondmenuPage', () => {
  let component: SecondmenuPage;
  let fixture: ComponentFixture<SecondmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondmenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
