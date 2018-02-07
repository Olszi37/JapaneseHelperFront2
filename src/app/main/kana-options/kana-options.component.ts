import { Component, OnInit } from '@angular/core';
import { HiraganaService } from '../../service/hiragana/hiragana.service';
import { Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kana-options',
  templateUrl: './kana-options.component.html',
  styleUrls: ['./kana-options.component.css'],
  providers: [HiraganaService]
})
export class KanaOptionsComponent implements OnInit {

  constructor(private hiraganaService:HiraganaService, private router:Router) { }

  @Input()
  type;

  level:string = "N5";

  @Output()
  onSelectLevel = new EventEmitter()

  selectedOption: string = 'signFirst';

  ngOnInit() {
  }

  checkShowLevels() {
    return this.type === 'KANJI' || this.type === 'VOCABULARY';
  }

  startLearn(){
    if(this.type === 'HIRAGANA') {
      this.router.navigateByUrl('/learn/hiragana?option=' + this.selectedOption);
    } else if (this.type === 'KATAKANA') {
      this.router.navigateByUrl('/learn/katakana?option=' + this.selectedOption)
    } else if (this.type === 'KANJI') {
      this.router.navigateByUrl('/learn/kanji?level=' + this.level + '&option=' + this.selectedOption)
    } else {
      this.router.navigateByUrl('/learn/vocabulary?level=' + this.level + '&option=' + this.selectedOption)
    }
  }

  levelSelect() {
    this.onSelectLevel.emit(this.level);
  }

  isRadioActive(option) {
    return this.selectedOption === option;
  }

}
