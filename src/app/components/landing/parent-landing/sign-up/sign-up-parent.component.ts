import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-parent',
  templateUrl: './sign-up-parent.component.html',
  // styleUrls: ['./sign-up-parent.component.css']
})
export class SignUpParentComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  signUp = new FormGroup({
    email : new FormControl('',
        [Validators.required, Validators.email]),
    password : new FormControl('',
        [Validators.required])
  });


  get email() {
    return this.signUp.get('email');
  }

  get password() {
    return this.signUp.get('password');
  }


  onSignUp(form) {

    const email = form.value.email;
    const password = form.value.password;
    this.authService.signUpParent(email, password);

    console.log(email, password);
    this.router.navigate(['chores']);
  }

  ngOnInit() {
  }

}
