import { Component, OnInit } from '@angular/core';
import { EventService } from '../events.service';
import { IEvent } from '../events.model';

import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:'/app/events/event-details/event-details.component.html',
    styles:[`
    .container{margin-left:20px; margin-right:20px;}
    .event-image{height:100px;}
    a {cursor:pointer;}
    `]
})

export class EventDetailsComponent implements OnInit {
    event:IEvent
    addMode:boolean
    constructor(private eventService: EventService, private route:ActivatedRoute) { }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
     }
     
    addSession(){
        this.addMode=true
    }

    ExitCreateSession(){
        this.addMode=false
    }
    saveSession(session){
        const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id));
        session.id = nextId+1;
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false;
    }
}