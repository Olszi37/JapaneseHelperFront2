import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginForm } from './login-form.component';
import { AlertModule } from 'ngx-bootstrap';
import { UserService } from '../../service/user/user.service';

@NgModule({
  declarations: [
    LoginForm
  ],
  imports: [
    BrowserModule, AlertModule.forRoot()
  ],
  providers: [ UserService ],
  bootstrap: [LoginForm]
})
export class AppModule { }
