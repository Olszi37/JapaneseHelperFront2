import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiLearnComponent } from './kanji-learn.component';

describe('KanjiLearnComponent', () => {
  let component: KanjiLearnComponent;
  let fixture: ComponentFixture<KanjiLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
