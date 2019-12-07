import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancesClientComponent } from './insurances-client.component';

describe('InsurancesClientComponent', () => {
  let component: InsurancesClientComponent;
  let fixture: ComponentFixture<InsurancesClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancesClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
