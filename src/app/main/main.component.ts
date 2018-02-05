import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [UserService]
})
export class MainComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  loggedUser:string = 'User';

  type:string = 'HIRAGANA';

  level:string = 'N5';

  ngOnInit() {
    this.userService.getLoggedUserLogin().subscribe(response => {
      let data = response.json();
      this.loggedUser = data;
    }, err => {
      console.log("Something went wrong!");
    })
  }

  changeType(type) {
    this.type = type;
  }

  onLevelSelect(level) {
    this.level = level;
  }

}
