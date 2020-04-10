import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeoCatwGlobalHoursComponent } from './leo-catw-global-hours.component';

describe('LeoCatwGlobalHoursComponent', () => {
  let component: LeoCatwGlobalHoursComponent;
  let fixture: ComponentFixture<LeoCatwGlobalHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeoCatwGlobalHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeoCatwGlobalHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
