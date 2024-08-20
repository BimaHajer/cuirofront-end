import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFounisseurComponent } from './delete-founisseur.component';

describe('DeleteFounisseurComponent', () => {
  let component: DeleteFounisseurComponent;
  let fixture: ComponentFixture<DeleteFounisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFounisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFounisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
