import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
  <div class="container">
  <h1>New Event</h1>
  <hr>
  <div class="col-md-6">
    <h3>[Create Event Form ]</h3>
    <br/><br/>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-default" (click)="Cancle()">Cancle</button>
  </div>
  </div>
  `,
})
export class CreateEventComponent {
  isDirty: boolean = true;
  constructor(private router: Router) {}
  Cancle() {
    this.router.navigate(['/events']);
  }
}
