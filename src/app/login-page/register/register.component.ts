import { Component } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../app.component.css'],
  providers: [ UserService ]
})
export class Register {

  login;
  password;
  email;

  constructor(private userService:UserService, private router:Router){
  }

  ngOnInit(){

  }

  register(){
    this.userService.createUser(this.login, this.password, this.email);
  }

  cancel(){
    this.router.navigateByUrl('');
  }

}
