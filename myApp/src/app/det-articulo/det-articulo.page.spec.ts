import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetArticuloPage } from './det-articulo.page';

describe('DetArticuloPage', () => {
  let component: DetArticuloPage;
  let fixture: ComponentFixture<DetArticuloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetArticuloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetArticuloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
