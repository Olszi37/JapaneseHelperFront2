import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  url = "http://localhost:8085/jhelper";

  constructor(private router:Router, private http:Http) { }

  authenticate(login, password){
    this.http.post(this.url + "/authorize", this.getLoginDto(login, password)).subscribe((response:Response)=> {
      if(response.ok){
        let data = response.json();

        if(!sessionStorage.getItem('token')){
          sessionStorage.setItem('token', data.id_token);
        }

        this.router.navigateByUrl("/main");
        return null;
      } else {
        return false;
      }
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
      if(response.ok){
        this.router.navigateByUrl("/login");
      }
    })
  }

  getUserDto(login, password, email){
    return {
      'login': login,
      'password': password,
      'email': email
    }
  }

  checkAuthentication(){
    this.http.get(this.url + "/authenticate").subscribe((response:Response) => {
      console.log(response);
    })
  }

}
