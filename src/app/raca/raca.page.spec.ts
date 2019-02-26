import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaPage } from './raca.page';

describe('RacaPage', () => {
  let component: RacaPage;
  let fixture: ComponentFixture<RacaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
