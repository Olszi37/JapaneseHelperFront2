import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPage implements OnInit {
  
  constructor(private router:Router) {
  }

  ngOnInit() {
  }

  goRegister(){
    this.router.navigateByUrl('/register');
  }

}
