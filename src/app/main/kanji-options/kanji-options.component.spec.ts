import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiOptionsComponent } from './kanji-options.component';

describe('KanjiOptionsComponent', () => {
  let component: KanjiOptionsComponent;
  let fixture: ComponentFixture<KanjiOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
