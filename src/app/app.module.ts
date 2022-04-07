import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { 
  EventListComponent,
  EventThumbnailComponent ,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouterActivator,
  EventListResolver
} from './events/index';
import { NavBarComponent } from './nav/nav-bar.component';
import { MyToastrService } from './common/toastr.service';
import { AppRoutes } from './routes';
import { Error404Component } from './errors/404.component';


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
