import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTransporteurComponent } from './delete-transporteur.component';

describe('DeleteTransporteurComponent', () => {
  let component: DeleteTransporteurComponent;
  let fixture: ComponentFixture<DeleteTransporteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTransporteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTransporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
