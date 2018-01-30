import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../service/record/record.service';
import { Promise } from 'q';
import { FlashcardService } from '../../service/flashcard/flashcard.service';

@Component({
  selector: 'app-hiragana-learn',
  templateUrl: './hiragana-learn.component.html',
  styleUrls: ['./hiragana-learn.component.css'],
  providers: [RecordService, FlashcardService]
})
export class HiraganaLearnComponent implements OnInit {

  type = 'HIRAGANA';
  total = 0;
  current = 0;

  flashcards = <any>[];
  preparedFlashcards = <any>[];
  records = [];
  selectedValue = null;

  constructor(private recordService:RecordService, private flashcardService:FlashcardService) { 
  }

  ngOnInit() {
    this.recordService.getFlashcards(this.type).subscribe((flashcards: any[]) => {
      let flashcardsIn = flashcards;
      this.flashcards = flashcardsIn;
      if(this.flashcards.length) {
        this.total = this.flashcards.length;
        this.preparedFlashcards = this.flashcardService.prepareFlashcards(flashcardsIn);
      }
    });
  }

  getFlashcard() {
    if(this.current < this.total) {
      return this.preparedFlashcards[this.current];
    }
  }

  getCorrectSign() {
    if(this.current < this.total) {
      return this.flashcards[this.current].correct.reading;
    }
  }

  nextFlashcard() {
    if(this.current > this.total){
      this.endLearningSession();
    } else {
      this.records.push(this.selectedValue);
      this.selectedValue = null;
      this.current++;
    }
  }

  cancel() {
    this.saveRecords();
  }

  onSelected(value) {
    this.selectedValue = value;
  }

  endLearningSession() {
    this.saveRecords();
  }

  saveRecords() {
    let records = this.flashcardService.calculateRecords(this.records, this.flashcards);
    this.recordService.saveFlashcards(this.type, records);
  }

  blockNextButton() {
    return !(this.selectedValue && this.current < this.total);
  }

}
