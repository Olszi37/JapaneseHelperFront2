import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'login-form',
  template: `
  <form>
    <div class="row vertical-center-row">
      <div class="col-sm-4 col-sm-offset-4">
        <div class="form-group text-center">
          <label for="login" class="form-label">
            <span>Login</span>
          </label>
          <input type="text" class="form-control form-control-lg" id="login"/>
        </div>
      </div>
    </div>

    <div class="row vertical-center-row">
      <div class="col-sm-4 col-sm-offset-4">
        <div class="form-group text-center">
          <label for="password" class="form-label">
            <span>Password</span>
          </label>
          <input type="password" class="form-control form-control-lg" id="password"/>
        </div>
      </div>
    </div>
    
    <div class="row vertical-center-row">
      <div class="col-sm-2 col-sm-offset-4">
        <button class="btn btn-default btn-block" type="submit">
          <span>Log in</span>
        </button>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-default btn-block">
          <span>Register</span>
        </button>
      </div>
    </div>
  </form>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
