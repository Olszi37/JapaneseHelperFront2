import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../app.component.css', './login-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [UserService]
})
export class LoginForm implements OnInit {

  login;
  password;

  loginButtonDisabled = false;
  unauthorized = false;
  loginExists = false;
  emailExists = false;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  authenticate(){
    if(this.login && this.password){
      this.userService.authenticate(this.login, this.password)
        .subscribe( response => {
          let data = response.json();
          this.unauthorized = false;
          if(!sessionStorage.getItem("token")){
            sessionStorage.setItem("token", data.id_token);
          }
          this.router.navigateByUrl("/main");
        }, err => {
          this.unauthorized = true;
        })
    }
  }

  checkLoginButton(){
    this.loginButtonDisabled = !this.login && !this.password;
  }

  goRegister(){
    this.router.navigateByUrl('/register');
  }

  onFocus() {
    this.unauthorized = false;
  }

}
