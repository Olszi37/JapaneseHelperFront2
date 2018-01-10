import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanaLearnComponent } from './kana-learn.component';

describe('KanaLearnComponent', () => {
  let component: KanaLearnComponent;
  let fixture: ComponentFixture<KanaLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanaLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanaLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
