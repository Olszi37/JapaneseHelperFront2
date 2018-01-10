import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginForm } from './login-form/login-form.component';
import { AlertModule } from 'ngx-bootstrap';
import { LoginPage } from './login-page.component';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    BrowserModule, AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [LoginPage]
})
export class AppModule { }
