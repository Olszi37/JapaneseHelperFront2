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

  type:string = 'HIRAGANA';

  level:string = 'N5';

  ngOnInit() {
  }

  changeType(type) {
    this.type = type;
  }

  onLevelSelect(level) {
    this.level = level;
  }

  isActive(type) {
    return this.type === type;
  }

}
