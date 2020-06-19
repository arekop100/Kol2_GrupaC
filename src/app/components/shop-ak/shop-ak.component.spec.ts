import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAKComponent } from './shop-ak.component';

describe('ShopAKComponent', () => {
  let component: ShopAKComponent;
  let fixture: ComponentFixture<ShopAKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
