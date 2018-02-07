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
    value: null,
    hint: null
  };

  constructor() { }

  ngOnInit() {
  }

  toShow(flashcard) {
    if(this.isKanaType()) {
      if(this.isSignFirstMethod()) {
        return {id: flashcard.id, value: flashcard.reading}
      } else {
        return {id: flashcard.id, value: flashcard.sign}
      }
    } else if (this.isKanjiType()) {
      if(this.isSignFirstMethod()) {
        return {id: flashcard.id, value: flashcard.meaning}
      } else {
        return {id: flashcard.id, value: flashcard.sign, hint: flashcard.onyomi + ' | ' + flashcard.kunyomi}
      }
    } else if (this.isVocabularyType()) {
      if(this.isSignFirstMethod()) {
        return {id: flashcard.id, value: flashcard.meaning}
      } else {
        return {id: flashcard.id, value: flashcard.word, hint: this.getFurigana(flashcard.furigana)}
      }
    }
  }

  getFurigana(furigana) {
    return furigana !== '' ? furigana : "";
  }

  isSignFirstMethod() {
    return this.method === 'signFirst';
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
