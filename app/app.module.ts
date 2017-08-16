import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { EventsAppComponent } from './event-app.component';
import { EventslistComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/eventsthumbanial.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/events.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionsListComponent } from './events/sessions-list.component';

import { EventRouteActivaor } from './events/event-route-activator.service';
import { EventsListResolver } from './events/event-list-resolver.service';
import { appRoute } from './routes';
import { AuthService } from './user/auth.service';

import { ToastrService } from './common/toastr.service';

// import { AppRoutingModule } from './App.routing'; //TODO: Create App.routing

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(appRoute)
    
    ],
    declarations: [
        EventsAppComponent,
        EventThumbnailComponent,
        EventslistComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionsListComponent
    ],
    providers: [
        EventService,
        ToastrService, 
        EventRouteActivaor,
        {
            provide:'deactivateCreateEvent',
            useValue:checkDirtyState
        },
        EventsListResolver,
        AuthService
    ],
    bootstrap: [EventsAppComponent],
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty){
        return window.confirm('Event is not saved do you really want to return back??')
    }return true
}