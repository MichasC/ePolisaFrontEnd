import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAdd3Component } from './insurance-add3.component';

describe('InsuranceAdd3Component', () => {
  let component: InsuranceAdd3Component;
  let fixture: ComponentFixture<InsuranceAdd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceAdd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAdd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
