import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { MyToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
  template: `
  <div class="container p-4">
    <h1>Upcomming Angular Events </h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>    
  </div>
  `,
})
export class EventListComponent implements OnInit {
  events: IEvent[];
  constructor(
    private eventService: EventService,
    private toast: MyToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
    console.log('Loading complete');
  }

  handleThumbnailClick(eventName) {
    this.toast.success(eventName);
  }
}
