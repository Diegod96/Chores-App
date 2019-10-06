import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-child-landing',
  templateUrl: './child-landing.component.html',
  styleUrls: ['./child-landing.component.css']
})
export class ChildLandingComponent implements OnInit {

  constructor(private router: Router) {
  }

  login = new FormGroup({
    username : new FormControl('',
        [Validators.required]),
    password : new FormControl('',
        [Validators.required])
  });


  get username() {
    return this.login.get('username');
  }

  get password() {
    return this.login.get('password');
  }


  onLogin(form) {

    const username = form.value.username;
    const password = form.value.password;
    //this.authService.loginUser(email, password);

    console.log(username, password);
    this.router.navigate(['chores']);
  }

  ngOnInit() {
  }

}
