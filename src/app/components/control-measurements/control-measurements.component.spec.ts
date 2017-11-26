import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMeasurementsComponent } from './control-measurements.component';

describe('ControlMeasurementsComponent', () => {
  let component: ControlMeasurementsComponent;
  let fixture: ComponentFixture<ControlMeasurementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
