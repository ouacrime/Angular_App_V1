import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductByDateComponent } from './all-product-by-date.component';

describe('AllProductByDateComponent', () => {
  let component: AllProductByDateComponent;
  let fixture: ComponentFixture<AllProductByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllProductByDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllProductByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
