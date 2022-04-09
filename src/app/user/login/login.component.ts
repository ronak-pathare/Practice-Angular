import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  templateUrl: './login.component.html',
  styles: [
    `
  em { float:right; color:#E05C65; padding-left:10px; }
  `,
  ],
})
export class LoginComponent {
  userName;
  password;
  mouseOverLogin;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  login(formValues) {
    console.log(formValues);
    this.authenticationService.loginUser(
      formValues.userName,
      formValues.password
    );
    this.router.navigate(['events']);
  }

  cancle() {
    this.router.navigate(['events']);
  }
}
