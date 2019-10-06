import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ParentService} from '../../../services/parent.service';

@Component({
  selector: 'app-sign-up-child',
  templateUrl: './sign-up-child.component.html',
  // styleUrls: ['./sign-up-child.component.css']
})
export class SignUpChildComponent implements OnInit {

  constructor(private router: Router,
              private parentService: ParentService) {
  }

  signUp = new FormGroup({
    username : new FormControl('',
        Validators.required),
    password : new FormControl('',
        Validators.required),
    firstName : new FormControl('',
        Validators.required),
    lastName : new FormControl('',
        Validators.required)
  });


  get username() {
    return this.signUp.get('username');
  }

  get firstName() {
    return this.signUp.get('firstName');
  }

  get lastName() {
    return this.signUp.get('lastName');
  }

  get password() {
    return this.signUp.get('password');
  }


  onSignUp(form) {

    const username = form.value.username;
    const name = form.value.firstName + ' ' + form.value.lastName;
    const password = form.value.password;
    const child= {name, username}

    console.log(username, name, password);
    this.parentService.signUpChild(child);
    this.router.navigate(['manage']);
  }

  ngOnInit() {
  }

}



