import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../service/record/record.service';
import { Promise } from 'q';
import { FlashcardService } from '../../service/flashcard/flashcard.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hiragana-learn',
  templateUrl: './hiragana-learn.component.html',
  styleUrls: ['./hiragana-learn.component.css', '../../app.component.css', '../learn.component.css'],
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

  isDoneModalShown: boolean = false;
  isExitModalShown: boolean = false; //modal

  doneContent: string = ''; //tutaj cos do wyswietlenia co ma byc w modalu co tam chcesz;
  exitContent: string = 'are you sure to stop current session?';

  doneTitle: string = ''; //daj se tytuły jakie chcesz nie wiem co tu dać;
  exitTitle: string = '';

  constructor(private recordService:RecordService, private flashcardService:FlashcardService,  private router:Router) {
  }

  ngOnInit() {
    this.recordService.getFlashcards(this.type, null).subscribe((flashcards: any[]) => {
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
    if(this.current >= this.total - 1){
      this.endLearningSession();
      this.current++;
    } else {
      this.records.push(this.selectedValue);
      this.selectedValue = null;
      this.current++;
    }
  }

  cancel() {
    if (this.records.length != 0) {
      this.saveRecords();
    }
    //modal z yes/no
    this.showExitModal();
  }

  onSelected(value) {
    this.selectedValue = value;
  }

  endLearningSession() {
    this.saveRecords();
    this.showDoneModal(); //modal z wynikiem tutaj zbierz informacje i przekaz info w doneContent
  }

  saveRecords() {
    let records = this.flashcardService.calculateRecords(this.records, this.flashcards);
    this.recordService.saveFlashcards(this.type, records);
  }

  blockNextButton() {
    return !(this.selectedValue && this.current < this.total);
  }

  showDoneModal() {
    this.isDoneModalShown = true; //pokaz modal po zakonczeniu testu
  }

  showExitModal() {
    this.isExitModalShown = true; //pokaz modal przy cancel
  }

  handleDone(event) {
    this.router.navigateByUrl("/main"); //po kliknieciu ok w modalu przejdz do main
  }

  handleExitWithYes(event) {
    //yes klikniety - wyswietl modal z wynikiem
    //tu stworz sobie funkcje tam wyliczającą co trzeba i wyswietlająca co chcesz w modalu
    //jak chcesz to w modal-content-component mozesz pozmieniac co tam chcesz zeby bylo przekazywane
    //bo ja nie mam jak przetestować i w sumie nie wiem jak działa ta cała nauka znaków
    this.showDoneModal();
  }

  handleExitWithNo(event) {
    this.isExitModalShown = true; //schowaj modal - kontynuuj nauke
  }
}
