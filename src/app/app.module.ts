import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { MyToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { AppRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouterActivator } from '././events/events-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
    }),
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    EventService,
    MyToastrService,
    EventRouterActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: CheckDirtyState,
    },
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function CheckDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(
      'You have not saved this event. \nDo you really want to cancle?'
    );

  return true;
}
