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
    private firstName:FormControl
    private lastName:FormControl
    constructor(private router:Router, private auth:AuthService) { }

    ngOnInit() {
        this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required,Validators.pattern('[a-zA-Z].*')]),
        this.lastName=  new FormControl(this.auth.currentUser.lastName, [Validators.required])
        this.profileForm = new FormGroup({
            firstName:this.firstName,
            lastName:this.lastName
        })
    }
    saveProfile(formValues){
        if(this.profileForm.valid){
            this.auth.updateUser(formValues.firstName,formValues.lastName)
            this.router.navigate(['/events'])
        }
    }
    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched
      }
      
      validateLastName() {
        return this.lastName.valid || this.lastName.untouched
      }
    cancel(){
        this.router.navigate(['/events'])
    }
}