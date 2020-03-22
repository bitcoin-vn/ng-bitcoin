import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertUsdToBtcComponent } from './convert-usd-to-btc.component';

describe('ConvertUsdToBtcComponent', () => {
  let component: ConvertUsdToBtcComponent;
  let fixture: ComponentFixture<ConvertUsdToBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertUsdToBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertUsdToBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
