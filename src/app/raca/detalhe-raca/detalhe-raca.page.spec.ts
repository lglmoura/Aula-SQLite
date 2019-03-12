import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRacaPage } from './detalhe-raca.page';

describe('DetalheRacaPage', () => {
  let component: DetalheRacaPage;
  let fixture: ComponentFixture<DetalheRacaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheRacaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheRacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
