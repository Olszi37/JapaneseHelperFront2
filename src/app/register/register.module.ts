import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Register } from './register.component';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    Register
  ],
  imports: [
    BrowserModule, AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [Register]
})
export class AppModule { }
