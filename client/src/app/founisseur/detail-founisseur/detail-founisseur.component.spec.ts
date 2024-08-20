import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFounisseurComponent } from './detail-founisseur.component';

describe('DetailFounisseurComponent', () => {
  let component: DetailFounisseurComponent;
  let fixture: ComponentFixture<DetailFounisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFounisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFounisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
