import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  toShow(flashcard) {
    if(this.isKanaType()) {
      return flashcard.sign;
    } else if (this.isKanjiType()) {
      return flashcard.sign;
    } else if (this.isVocabularyType()) {
      return flashcard.word;
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

}
