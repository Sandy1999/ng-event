import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../events.model';

@Component({
    selector: 'create-session',
    templateUrl: 'app/events/event-details/create-session.component.html',
    styles:[`
    em{ float:right; color:#E5CS65; padding-left:10px;}
    .error input{background-color:#E3C3C5;}
    `]
})

export class CreateSessionComponent implements OnInit {
    newSessionForm:FormGroup
    name:FormControl
    presenter:FormControl
    duration:FormControl
    level:FormControl
    abstract:FormControl
    constructor() { }

    ngOnInit() { 
        this.name = new FormControl('',Validators.required),
        this.presenter = new FormControl('',Validators.required),
        this.duration = new FormControl('',Validators.required),
        this.level = new FormControl('',Validators.required),
        this.abstract= new FormControl('',[Validators.required,Validators.maxLength(400),this.restrictedWords])
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstract:this.abstract
        })
    }
    saveSession(formValue){
        let session:ISession={
            id:undefined,
            name:formValue.name,
            presenter:formValue.presenter,
            duration:formValue.duration,
            level:formValue.level,
            abstract:formValue.abstract,
            voters:[]
        }

        console.log(session)
    }
    private restrictedWords(control:FormControl):{[key:string]: any} 
    {
        return control.value.includes('foo')
        ?{'restrictedWords':'foo'}
        :null    
    }
}