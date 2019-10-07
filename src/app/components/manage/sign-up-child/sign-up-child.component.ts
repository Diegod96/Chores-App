import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ParentService} from '../../../services/parent.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-child',
  templateUrl: './sign-up-child.component.html',
  // styleUrls: ['./sign-up-child.component.css']
})
export class SignUpChildComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService,
              private parentService: ParentService) {
  }

  signUp = new FormGroup({
    email : new FormControl('',
        Validators.required),
    password : new FormControl('',
        Validators.required),
    firstName : new FormControl('',
        Validators.required),
    lastName : new FormControl('',
        Validators.required)
  });


  get username() {
    return this.signUp.get('email');
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

    const email = form.value.email;
    const name = form.value.firstName + ' ' + form.value.lastName;
    const password = form.value.password;
    this.authService.signUpChild(email, password);
    this.parentService.addChild(email, name);
    
    this.router.navigate(['manage']);
  }

  ngOnInit() {
  }

}



