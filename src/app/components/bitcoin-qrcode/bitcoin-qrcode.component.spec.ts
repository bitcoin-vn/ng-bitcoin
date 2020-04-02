import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinQRCodeComponent } from './bitcoin-qrcode.component';

describe('BitcoinQRCodeComponent', () => {
  let component: BitcoinQRCodeComponent;
  let fixture: ComponentFixture<BitcoinQRCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinQRCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinQRCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
