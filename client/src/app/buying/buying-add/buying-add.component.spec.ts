import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingAddComponent } from './buying-add.component';

describe('BuyingAddComponent', () => {
  let component: BuyingAddComponent;
  let fixture: ComponentFixture<BuyingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
