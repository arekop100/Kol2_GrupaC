import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemAKComponent } from './shop-item-ak.component';

describe('ShopItemAKComponent', () => {
  let component: ShopItemAKComponent;
  let fixture: ComponentFixture<ShopItemAKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemAKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemAKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
