import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';

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
  errorOccurred = false;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  authenticate(){
    if(this.login && this.password){
      this.userService.authenticate(this.login, this.password)
        .subscribe( data => {
          this.errorOccurred = false;
          if(!sessionStorage.getItem("token")){
            sessionStorage.setItem("token", data.id_token);
          }

          this.router.navigateByUrl("/main");
        }, err => {
          this.errorOccurred = true;
          console.log("err!");
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
    this.errorOccurred = false;
  }

}
