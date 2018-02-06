import { Injectable } from '@angular/core';

@Injectable()
export class FlashcardService {

  constructor() { }

  prepareFlashcards(flashcards) {
    let finishedFlashcards = [];
    flashcards.forEach(card => {
      let prepared = [];
      prepared.push(card.correct);
      card.other.forEach(other => {
        prepared.push(other);
      })
      finishedFlashcards.push(this.shuffleArray(prepared));
    });

    return finishedFlashcards;
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

  calculateRecords(records, flashcards) {
    let i = records.length - 1;
    let userRecordDtos = [];

    while(i) {
      let userRecordDto = new UserRecordDto();
      userRecordDto.recordId = flashcards[i].recordId;
      userRecordDto.correct = records[i] === flashcards[i].correct.id;
      userRecordDtos.push(userRecordDto);
      i--;
    }
    console.log(userRecordDtos);
    return userRecordDtos;
  }

  calculateLearnInfo(records, total) {
    let totalCorrect: number = 0;
    for(let record of records) {
      if (record.correct) {
        totalCorrect++;
      }
    }
    return 'Correct ' + totalCorrect + ' of ' + total;
  }

}

export class UserRecordDto {

  recordId: number;

  correct: boolean;

  constructor() {};
}
