import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFounisseurComponent } from './list-founisseur.component';

describe('ListFounisseurComponent', () => {
  let component: ListFounisseurComponent;
  let fixture: ComponentFixture<ListFounisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFounisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFounisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
