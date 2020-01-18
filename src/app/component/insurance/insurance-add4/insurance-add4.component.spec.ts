import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAdd4Component } from './insurance-add4.component';

describe('InsuranceAdd4Component', () => {
  let component: InsuranceAdd4Component;
  let fixture: ComponentFixture<InsuranceAdd4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceAdd4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAdd4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
