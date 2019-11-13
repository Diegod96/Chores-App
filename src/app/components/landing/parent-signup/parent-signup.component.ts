import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ParentService } from 'src/app/services/parent.service';
import {AbstractControl} from '@angular/forms';
// import { PasswordValidation } from './password-validation';

@Component({
  selector: 'app-parent-signup',
  templateUrl: './parent-signup.component.html',
  styleUrls: ['./parent-signup.component.css']
})
export class ParentSignupComponent implements OnInit {


  constructor(private router: Router,
              private authService: AuthService,
              private parentService: ParentService) {
}

signUp = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required]),
    confirmation : new FormControl('', [Validators.required])
});


get email() {
return this.signUp.get('email');
}

get password() {
return this.signUp.get('password');
}

get confirmation() {
  return this.signUp.get('confirmation');

}




onSignUp(form) {

  const email = form.value.email;
  const password = form.value.password;
  const confirmation = form.value.confirmation;
  this.authService.signUpParent(email, password);
  console.log(email, password);
  this.router.navigate(['home']);
}

MatchPassword(AC: AbstractControl) {
  const password = AC.get('password').value; // Get value in password field
  const confirmPassword = AC.get('confirmPassword').value; // Get value in confirm password field
  // tslint:disable-next-line: triple-equals
  if (password != confirmPassword) {
      console.log('Passwords do not match!!!');
      AC.get('confirmPassword').setErrors( {MatchPassword: true} );
    } else {
      console.log('Passwords match');
      return null;
    }
}


ngOnInit(): void {
}

}



