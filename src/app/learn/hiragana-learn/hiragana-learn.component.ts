import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../service/record/record.service';
import { Promise } from 'q';
import { FlashcardService } from '../../service/flashcard/flashcard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hiragana-learn',
  templateUrl: './hiragana-learn.component.html',
  styleUrls: ['./hiragana-learn.component.css', '../../app.component.css', '../learn.component.css'],
  providers: [RecordService, FlashcardService]
})
export class HiraganaLearnComponent implements OnInit {

  type: string = 'HIRAGANA';
  option: string = 'signFirst';
  total: number = 0;
  current: number = 0;

  flashcards = <any>[];
  preparedFlashcards = <any>[];
  records = [];
  selectedValue = null;

  isDoneModalShown: boolean = false;
  isExitModalShown: boolean = false; //modal

  doneContent: string = 'Correct 0 of 0'; //tutaj cos do wyswietlenia co ma byc w modalu co tam chcesz;
  exitContent: string = 'Are you sure to stop current session?';

  doneTitle: string = 'End of session'; //daj se tytuły jakie chcesz nie wiem co tu dać;
  exitTitle: string = 'Cancel session';

  constructor(private recordService:RecordService, private flashcardService:FlashcardService,  private router:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.option = this.activatedRoute.snapshot.queryParams['option'];
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
      return this.getProperSide();
    }
  }

  getProperSide() {
    if (this.option === 'signFirst') {
      return this.flashcards[this.current].correct.sign;
    } else {
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
    this.doneContent = this.flashcardService.calculateLearnInfo(records, this.total);
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
    this.isExitModalShown = false
    this.showDoneModal();
  }

  handleExitWithNo(event) {
    this.isExitModalShown = false; //schowaj modal - kontynuuj nauke
  }
}
