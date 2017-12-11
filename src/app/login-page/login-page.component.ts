import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  imgBack: string;
  
  constructor() {
    this.imgBack = "/assets/img/jap-culture.jpg"; 
  }

  ngOnInit() {
  }

}
