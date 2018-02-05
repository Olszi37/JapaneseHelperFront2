import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  url = "http://localhost:8085/jhelper";

  constructor(private router:Router, private http:Http) { }

  authenticate(login, password): Observable<Response> {
    return this.http.post(this.url + "/authorize", this.getLoginDto(login, password))
      .map((response:Response) => response);
  }

  getLoginDto(login, password){
    return {
      'login': login,
      'password': password
    }
  }

  createUser(login, password, email): Observable<any>{
    return this.http.post(this.url + "/user", this.getUserDto(login, password, email)).map(res => res);
  }

  getUserDto(login, password, email){
    return {
      'login': login,
      'password': password,
      'email': email
    }
  }

  getLoggedUserLogin(): Observable<Response> {
    return this.http.get(this.url + "/logged-user", {headers: this.getHeaders()}).map((response:Response) => response);
  }

  getHeaders() {
    let requestHeaders = new Headers();
    requestHeaders.append("Authorization", "Bearer " + sessionStorage.getItem("token"));
    return requestHeaders;
  }
}
