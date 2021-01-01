import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingcartComponent } from './add-shoppingcart.component';

describe('AddShoppingcartComponent', () => {
  let component: AddShoppingcartComponent;
  let fixture: ComponentFixture<AddShoppingcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShoppingcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoppingcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
