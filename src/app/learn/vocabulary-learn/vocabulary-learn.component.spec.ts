import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyLearnComponent } from './vocabulary-learn.component';

describe('VocabularyLearnComponent', () => {
  let component: VocabularyLearnComponent;
  let fixture: ComponentFixture<VocabularyLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
