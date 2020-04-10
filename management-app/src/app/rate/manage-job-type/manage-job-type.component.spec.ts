import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobTypeComponent } from './manage-job-type.component';

describe('ManageJobTypeComponent', () => {
  let component: ManageJobTypeComponent;
  let fixture: ComponentFixture<ManageJobTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageJobTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJobTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
