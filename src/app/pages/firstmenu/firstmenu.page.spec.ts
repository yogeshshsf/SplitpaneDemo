import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstmenuPage } from './firstmenu.page';

describe('FirstmenuPage', () => {
  let component: FirstmenuPage;
  let fixture: ComponentFixture<FirstmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstmenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
