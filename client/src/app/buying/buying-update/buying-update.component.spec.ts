import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingUpdateComponent } from './buying-update.component';

describe('BuyingUpdateComponent', () => {
  let component: BuyingUpdateComponent;
  let fixture: ComponentFixture<BuyingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
