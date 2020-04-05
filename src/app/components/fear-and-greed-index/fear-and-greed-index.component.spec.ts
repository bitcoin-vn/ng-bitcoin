import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FearAndGreedIndexComponent } from './fear-and-greed-index.component';

describe('FearAndGreedIndexComponent', () => {
  let component: FearAndGreedIndexComponent;
  let fixture: ComponentFixture<FearAndGreedIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FearAndGreedIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FearAndGreedIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
