import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Register } from './register.component';
import { AlertModule } from 'ngx-bootstrap';
import { UserService } from '../../service/user/user.service';

@NgModule({
  declarations: [
    Register
  ],
  imports: [
    BrowserModule, AlertModule.forRoot()
  ],
  providers: [ UserService ],
  bootstrap: [Register]
})
export class AppModule { }
