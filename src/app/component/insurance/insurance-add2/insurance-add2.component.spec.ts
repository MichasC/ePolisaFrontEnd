import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAdd2Component } from './insurance-add2.component';

describe('InsuranceAdd2Component', () => {
  let component: InsuranceAdd2Component;
  let fixture: ComponentFixture<InsuranceAdd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceAdd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAdd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
