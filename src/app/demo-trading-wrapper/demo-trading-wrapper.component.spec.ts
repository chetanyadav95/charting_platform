import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTradingWrapperComponent } from './demo-trading-wrapper.component';

describe('DemoTradingWrapperComponent', () => {
  let component: DemoTradingWrapperComponent;
  let fixture: ComponentFixture<DemoTradingWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTradingWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTradingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
