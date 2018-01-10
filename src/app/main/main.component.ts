import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  kanaOpts(){
    this.router.navigate(['main', 'kana']);
  }

  kanjiOpts(){
    this.router.navigate(['main', 'kanji']);
  }

  vocabularyOpts(){
    this.router.navigate(['main', 'vocabulary']);
  }

}
