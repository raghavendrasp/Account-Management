import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLeoCatwActualsComponent } from './upload-leo-catw-actuals.component';

describe('UploadLeoCatwActualsComponent', () => {
  let component: UploadLeoCatwActualsComponent;
  let fixture: ComponentFixture<UploadLeoCatwActualsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadLeoCatwActualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLeoCatwActualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
