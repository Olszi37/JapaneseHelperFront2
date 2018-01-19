import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class HiraganaService {

  url = "http://localhost:8085/jhelper/hiragana";

  constructor(private http:Http) { }

  getAll(){
    let requestHeaders = new Headers();
    requestHeaders.append("Authorization", "Bearer " + sessionStorage.getItem("token"));
    this.http.get(this.url + "/all", {headers: requestHeaders}).subscribe((response:Response) => {
      if(response.ok){
        let data = response.json();
        console.log("service: ", data);
        return data;
      }
    })
  }

}
