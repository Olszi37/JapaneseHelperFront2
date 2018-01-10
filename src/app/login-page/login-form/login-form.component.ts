import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [UserService]
})
export class LoginForm implements OnInit {

  login;
  password;

  loginButtonDisabled = false;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  authenticate(){
    if(this.login && this.password){
      this.userService.authenticate(this.login, this.password);
    }
  }

  checkLoginButton(){
    this.loginButtonDisabled = !this.login && !this.password;
  }

  goRegister(){
    this.router.navigateByUrl('/register');
  }

}
