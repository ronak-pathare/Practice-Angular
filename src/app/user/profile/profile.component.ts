import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    let firstName = new FormControl(
      this.authenticationService.currentUser.firstName
    );
    let lastName = new FormControl(
      this.authenticationService.currentUser.lastName
    );
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    });
  }

  saveProfile(formValues) {
    this.authenticationService.updateCurrentUser(
      formValues.firstName,
      formValues.lastName
    );
    this.router.navigate(['events']);
  }

  cancle() {
    this.router.navigate(['events']);
  }
}
