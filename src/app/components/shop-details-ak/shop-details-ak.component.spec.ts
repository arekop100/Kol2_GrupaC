import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsAKComponent } from './shop-details-ak.component';

describe('ShopDetailsAKComponent', () => {
  let component: ShopDetailsAKComponent;
  let fixture: ComponentFixture<ShopDetailsAKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsAKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsAKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
