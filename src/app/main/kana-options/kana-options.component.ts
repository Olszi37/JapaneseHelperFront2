import { Component, OnInit } from '@angular/core';
import { HiraganaService } from '../../service/hiragana/hiragana.service';

@Component({
  selector: 'kana-options',
  templateUrl: './kana-options.component.html',
  styleUrls: ['./kana-options.component.css'],
  providers: [HiraganaService]
})
export class KanaOptionsComponent implements OnInit {

  constructor(private hiraganaService:HiraganaService) { }

  ngOnInit() {
  }

  getAllHiraganas(){
    let hiraganas = this.hiraganaService.getAll();
    console.log(hiraganas);
  }

}
