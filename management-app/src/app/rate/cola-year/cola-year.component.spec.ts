import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaYearComponent } from './cola-year.component';

describe('ColaYearComponent', () => {
  let component: ColaYearComponent;
  let fixture: ComponentFixture<ColaYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
