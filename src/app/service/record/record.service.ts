import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Promise } from 'q';

@Injectable()
export class RecordService {

  url = "http://localhost:8085/jhelper/record";

  flashcards = [];

  flashcardsStream = new Subject();

  constructor(private http:Http) { }

  getFlashcards(type) {
    this.getFlashcardsQuery(type);
    return Observable.from(this.flashcardsStream);
  }

  getFlashcardsQuery(type) {
    this.http.get(this.url + this.getProperEndpoint(type), {headers: this.getHeaders()})
    .subscribe((response:Response) => {
      if(response.ok) {
        let data = response.json();
        let flashcards = data;
        this.flashcards = flashcards;
        this.flashcardsStream.next(this.flashcards);
      }
    })
  }

  saveFlashcards(type, records) {
    console.log("WESZLO");
    this.http.post(this.url + this.getProperEndpoint(type), records, 
    {headers: this.getHeaders()}).subscribe((response:Response) => {
      if(response.ok) {
        console.log("saved");
      }
    });
  }

  getHeaders() {
    let requestHeaders = new Headers();
    requestHeaders.append("Authorization", "Bearer " + sessionStorage.getItem("token"));
    return requestHeaders;
  }

  getProperEndpoint(type) {
    if(type === 'HIRAGANA') {
      return '/hiragana'
    } else if(type === 'KATAKANA') {
      return '/katakana'
    } else if(type === 'KANJI') {
      return '/kanji'
    } else {
      return '/vocabulary'
    }
  }

}
