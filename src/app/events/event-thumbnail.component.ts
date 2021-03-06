import { Component, Input } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
  selector: 'event-thumbnail',
  template: `
  <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
  <h2>{{event.name}}</h2>
  <div>Date: {{event.date | date:'fullDate'}}</div>
  <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
    Time: {{event.time}} 
    <span *ngSwitchCase="'8:00 am'"> (Early Start)</span>
    <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
    <span *ngSwitchDefault> (Normal Start)</span>
  </div>
  <div [ngStyle]="getPriceStyle()">Price: \${{event.price}}</div>
  <div [hidden]="!event?.location">
    <span>Location: {{event.location?.address}},</span>
    <span class="pad-left">{{event.location?.city}},{{event.location?.country}}</span>
  </div>
  <div *ngIf="event?.onlineUrl">
    Online URL: {{event.onlineUrl}}
  </div>
  </div>
  `,
  styles: [
    `
    .green{color:#003300 !important;}
    .bold{font-weight:bold;}
    .thumbnail{ min-height:210px;}
    .pad-left {margin-left:10px;}
    .well div{color:#bbb;}
  `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    // const time = this.event && this.event.time === '8:00 am';
    // return {green:time, bold:time}

    if (this.event && this.event.time === '8:00 am') return ['green', 'bold'];
    return [];
  }
  getPriceStyle() {
    if (this.event && this.event.price < 600)
      return { color: '#003300', 'font-weight': 'bold' };
    return {};
  }
}
