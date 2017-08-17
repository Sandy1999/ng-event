import { Component, OnInit, Input } from '@angular/core';
import { ISession } from './events.model';

@Component({
    selector: 'sessions-list',
    templateUrl: 'app/events/sessions-list.component.html'
})

export class SessionsListComponent implements OnInit {
    @Input() sessions:ISession[]

    constructor() { }

    ngOnInit() { }
}