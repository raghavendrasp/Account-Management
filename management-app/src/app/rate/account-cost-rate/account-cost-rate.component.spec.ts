import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCostRateComponent } from './account-cost-rate.component';

describe('AccountCostRateComponent', () => {
  let component: AccountCostRateComponent;
  let fixture: ComponentFixture<AccountCostRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCostRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCostRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
