import { Component, OnInit } from '@angular/core';
import { HiraganaService } from '../../service/hiragana/hiragana.service';
import { Input } from '@angular/core';
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

  ngOnInit() {
  }

  checkShowLevels() {
    return this.type === 'KANJI' || this.type === 'VOCABULARY'; 
  }

  startLearn(){
    if(this.type === 'HIRAGANA') {
      this.router.navigateByUrl('/learn/hiragana');
    } else if (this.type === 'KATAKANA') {
      this.router.navigateByUrl('/learn/katakana')
    } else if (this.type === 'KANJI') {
      this.router.navigateByUrl('/learn/kanji')
    } else {
      this.router.navigateByUrl('/learn/vocabulary')
    }
  }

}
