import { Component } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ UserService ]
})
export class Register {

  constructor(private userService:UserService, private router:Router){

  }

  ngOnInit(){

  }

  register(){

  }

  cancel(){
    this.router.navigateByUrl('');
  }

}
