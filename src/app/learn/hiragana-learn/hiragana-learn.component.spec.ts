import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraganaLearnComponent } from './hiragana-learn.component';

describe('HiraganaLearnComponent', () => {
  let component: HiraganaLearnComponent;
  let fixture: ComponentFixture<HiraganaLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiraganaLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiraganaLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
