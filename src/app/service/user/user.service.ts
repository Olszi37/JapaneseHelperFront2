import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  url = "http://localhost:8089/jhelper";

  constructor(private router:Router, private http:Http) { }

  authenticate(login, password){
    let headers2 = new Headers();
    headers2.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    this.http.post("/authorize", this.getLoginDto(login, password), {headers: headers2}).subscribe((response:Response)=> {
      if(response.ok){
        let data = response.json();
        console.log(data);
        sessionStorage.setItem('token', data.idToken);
      }
      //
    });
  }

  getLoginDto(login, password){
    return {
      'login': login,
      'password': password
    }
  }

  createUser(login, password, email){
    this.http.post(this.url + "/user", this.getUserDto(login, password, email)).subscribe((response:Response)=>{
      let data = response.json();
      console.log(data);
    })
  }

  getUserDto(login, password, email){
    return {
      'login': login,
      'password': password,
      'email': email
    }
  }

}
