import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBuyingComponent } from './detail-buying.component';

describe('DetailBuyingComponent', () => {
  let component: DetailBuyingComponent;
  let fixture: ComponentFixture<DetailBuyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBuyingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBuyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
