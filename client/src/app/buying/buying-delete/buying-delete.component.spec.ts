import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingDeleteComponent } from './buying-delete.component';

describe('BuyingDeleteComponent', () => {
  let component: BuyingDeleteComponent;
  let fixture: ComponentFixture<BuyingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
