import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'create-event',
    template: `
    <h1>Create your Event here</h1>
    <hr>
    <div class="col-md-6">
    <h3>[Create Event Form goes here ]</h3>
    <br>
    <br>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-default" (click)="cancel()" >Cancel</button>
    </div> 
    `
})

export class CreateEventComponent implements OnInit {
    constructor( private router: Router) { }

    isDirty:boolean = true;
    ngOnInit() { }

    cancel(){
        this.router.navigate(['/events'])
    }
}