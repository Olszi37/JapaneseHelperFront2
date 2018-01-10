import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyOptionsComponent } from './vocabulary-options.component';

describe('VocabularyOptionsComponent', () => {
  let component: VocabularyOptionsComponent;
  let fixture: ComponentFixture<VocabularyOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
