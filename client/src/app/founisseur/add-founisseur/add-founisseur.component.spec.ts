import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFounisseurComponent } from './add-founisseur.component';

describe('AddFounisseurComponent', () => {
  let component: AddFounisseurComponent;
  let fixture: ComponentFixture<AddFounisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFounisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFounisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
