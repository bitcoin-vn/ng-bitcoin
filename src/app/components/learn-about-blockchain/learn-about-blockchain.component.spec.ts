import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAboutBlockchainComponent } from './learn-about-blockchain.component';

describe('LearnAboutBlockchainComponent', () => {
  let component: LearnAboutBlockchainComponent;
  let fixture: ComponentFixture<LearnAboutBlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnAboutBlockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnAboutBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
