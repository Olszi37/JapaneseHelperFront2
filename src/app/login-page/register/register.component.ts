import {Component} from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../app.component.css'],
  providers: [ UserService, BsModalService ]
})
export class Register {

  login;
  password;
  email;

  isSuccessModalShown: boolean = false;
  successModalTitle: string = "Success";
  successModalContent: string = "You have been successfully registered. Now you can log in.";

  isErrorModalShown: boolean = false;
  errorModalTitle: string = "Oops!";
  errorModalContent: string = "Something went wrong with registration";

  constructor(
    private userService:UserService,
    private router:Router){
  }

  ngOnInit(){
  }

  register(){
    this.userService.createUser(this.login, this.password, this.email)
      .subscribe( response => {
        this.showSuccessModal();
      }, err => {
        this.showErrorModal();
      });
  }

  cancel(){
    this.router.navigateByUrl('');
  }

  showSuccessModal() {
    this.isSuccessModalShown = true;
  }

  showErrorModal() {
    this.isErrorModalShown= true;
  }

  handleSuccess() {
    this.router.navigateByUrl("/login");
    this.isSuccessModalShown = false;
  }

  handleError() {
    this.isErrorModalShown = false;
  }

}
