import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,
              private authService: AuthService) {
  }

  login = new FormGroup({
    user: new FormControl('', [Validators.required]),
    email : new FormControl('',
        [Validators.required, Validators.email]),
    password : new FormControl('',
        [Validators.required])
  });


  get email() {
    return this.login.get('email');
  }

  get user() {
    return this.login.get('user');
  }

  get password() {
    return this.login.get('password');
  }


  onLogin(form) {
    const email = form.value.email;
    const password = form.value.password;
    const user= form.value.user;
    this.authService.login(email, password, user);
    }

  ngOnInit() {
  }

}
