import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanaOptionsComponent } from './kana-options.component';

describe('KanaOptionsComponent', () => {
  let component: KanaOptionsComponent;
  let fixture: ComponentFixture<KanaOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanaOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanaOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
