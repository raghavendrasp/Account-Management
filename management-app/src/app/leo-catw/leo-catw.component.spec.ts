import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeoCatwComponent } from './leo-catw.component';

describe('LeoCatwComponent', () => {
  let component: LeoCatwComponent;
  let fixture: ComponentFixture<LeoCatwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeoCatwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeoCatwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
