import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'profile',
    templateUrl:'app/user/profile.component.html' ,
    styles:[`
    em{ float:right; color:#E5C65; padding-left:10px;}
    .error input{background-color:#E3C3C5;}
    `]
})

export class ProfileComponent implements OnInit {
    profileForm:FormGroup
    constructor(private router:Router, private auth:AuthService) { }

    ngOnInit() {
        this.profileForm = new FormGroup({
            firstName: new FormControl(this.auth.currentUser.firstName, [Validators.required]),
            lastName: new FormControl(this.auth.currentUser.lastName, [Validators.required])
        })
    }
    saveProfile(formValues){
        if(this.profileForm.valid){
            this.auth.updateUser(formValues.firstName,formValues.lastName)
            this.router.navigate(['/events'])
        }
    }
    cancel(){
        this.router.navigate(['/events'])
    }
}