import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPostPage } from './gestion-post.page';

describe('GestionPostPage', () => {
  let component: GestionPostPage;
  let fixture: ComponentFixture<GestionPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
