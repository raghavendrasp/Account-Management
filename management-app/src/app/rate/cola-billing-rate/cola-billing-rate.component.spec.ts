import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaBillingRateComponent } from './cola-billing-rate.component';

describe('ColaBillingRateComponent', () => {
  let component: ColaBillingRateComponent;
  let fixture: ComponentFixture<ColaBillingRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaBillingRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaBillingRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
