import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  @Input()
  flashcards;
  @Input()
  type;
  @Input()
  method;

  @Output()
  onSelected = new EventEmitter();

  showValue: {
    id: null,
    value: null
  };

  constructor() { }

  ngOnInit() {
  }

  toShow(flashcard) {
    if(this.isKanaType()) {
      return {id: flashcard.id, value: flashcard.sign}
    } else if (this.isKanjiType()) {
      return {id: flashcard.id, value: flashcard.sign}
    } else if (this.isVocabularyType()) {
      return {id: flashcard.id, value: flashcard.word}
    }
  }

  isKanaType() {
    return this.type === "HIRAGANA" || this.type === "KATAKANA";
  }

  isKanjiType() {
    return this.type === 'KANJI';
  }

  isVocabularyType() {
    return this.type === 'VOCABULARY';
  }

  onSelect(value) {
    this.onSelected.emit(value);
  }

}
