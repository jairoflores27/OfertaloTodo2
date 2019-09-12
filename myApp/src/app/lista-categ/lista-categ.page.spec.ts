import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategPage } from './lista-categ.page';

describe('ListaCategPage', () => {
  let component: ListaCategPage;
  let fixture: ComponentFixture<ListaCategPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCategPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
