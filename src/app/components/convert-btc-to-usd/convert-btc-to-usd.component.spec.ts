import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertBtcToUsdComponent } from './convert-btc-to-usd.component';

describe('ConvertBtcToUsdComponent', () => {
  let component: ConvertBtcToUsdComponent;
  let fixture: ComponentFixture<ConvertBtcToUsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertBtcToUsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertBtcToUsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
