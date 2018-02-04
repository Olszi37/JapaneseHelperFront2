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

  getFlashcards(type, level) {
    this.getFlashcardsQuery(type, level);
    return Observable.from(this.flashcardsStream);
  }

  getFlashcardsQuery(type, level) {
    this.http.get(this.url + this.getProperEndpoint(type, level), {headers: this.getHeaders()})
    .subscribe((response:Response) => {
      if(response.ok) {
        let data = response.json();
        let flashcards = data;
        this.flashcards = flashcards;
        this.flashcardsStream.next(this.flashcards);
      }
    })
  }

  getStats(type, level): Observable<any> {
    return this.http.get(this.url + this.getProperEndpoint(type, level) + "/stats",{headers: this.getHeaders()}).map(res => res.json());
  }

  saveFlashcards(type, records) {
    this.http.post(this.url + this.getProperEndpoint(type, null), records, 
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

  getProperEndpoint(type, level) {
    if(type === 'HIRAGANA') {
      return '/hiragana'
    } else if(type === 'KATAKANA') {
      return '/katakana'
    } else if(type === 'KANJI') {
      if(level === null) {
        return '/kanji';
      } else {
        return '/kanji/' + level;
      }
    } else {
      if(level === null) {
        return '/vocabulary';
      } else {
        return '/vocabulary/' + level;
      }
    }
  }

}
