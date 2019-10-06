import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,
              private authService: AuthService) {
  }

  login = new FormGroup({
    email : new FormControl('',
        [Validators.required, Validators.email]),
    password : new FormControl('',
        [Validators.required])
  });


  get email() {
    return this.login.get('email');
  }

  get password() {
    return this.login.get('password');
  }


  onLogin(form) {

    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginParent(email, password);

    console.log(email, password);
    this.router.navigate(['chores']);

  }

  ngOnInit() {
  }

}
