import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaFutureBillingRateComponent } from './cola-future-billing-rate.component';

describe('ColaFutureBillingRateComponent', () => {
  let component: ColaFutureBillingRateComponent;
  let fixture: ComponentFixture<ColaFutureBillingRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaFutureBillingRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaFutureBillingRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
