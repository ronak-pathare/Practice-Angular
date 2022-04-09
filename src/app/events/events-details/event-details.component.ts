import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
  templateUrl: './events-details.component.html',
  styles: [
    `
    .event-image{height:100px;}
  `,
  ],
})
export class EventDetailsComponent {
  event: IEvent;
  constructor(
    private eventSetvice: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.event = this.eventSetvice.getEvent(+this.route.snapshot.params['id']);
  }
}
