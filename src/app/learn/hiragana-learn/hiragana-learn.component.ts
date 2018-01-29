import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../service/record/record.service';
import { Promise } from 'q';

@Component({
  selector: 'app-hiragana-learn',
  templateUrl: './hiragana-learn.component.html',
  styleUrls: ['./hiragana-learn.component.css'],
  providers: [RecordService]
})
export class HiraganaLearnComponent implements OnInit {

  type = 'HIRAGANA';
  total = 0;
  current = 0;

  flashcards = <any>[];

  preparedFlashcards = <any>[];

  constructor(private recordService:RecordService) { 
  }

  ngOnInit() {
    this.recordService.getFlashcards(this.type).subscribe((flashcards: any[]) => {
      let flashcardsIn = flashcards;
      this.flashcards = flashcardsIn;
      if(this.flashcards.length) {
        this.total = this.flashcards.length;
        this.prepareFlashcards(flashcardsIn);
      }
    });
  }

  getFlashcard() {
    return this.preparedFlashcards[this.current];
  }

  getCorrectSign() {
    return this.flashcards[this.current].correct.reading;
  }

  nextFlashcard() {
    this.current++;
  }

  prepareFlashcards(flashcards) {
    flashcards.forEach(card => {
      let prepared = [];
      prepared.push(card.correct);
      card.other.forEach(other => {
        prepared.push(other);
      })
      this.preparedFlashcards.push(this.shuffleArray(prepared));
    });
  }

  shuffleArray(prepared) {
    var m = prepared.length, temp, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      temp = prepared[m];
      prepared[m] = prepared[i];
      prepared[i] = temp;
    }

    return prepared;
  }

}
