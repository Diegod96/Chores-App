import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ChildService } from 'src/app/services/child.service';
@Component({
  selector: 'app-child-signup',
  templateUrl: './child-signup.component.html',
  styleUrls: ['./child-signup.component.css']
})
export class ChildSignupComponent implements OnInit {
  constructor(private router: Router,
    private authService: AuthService,
    private childService: ChildService) {
}

signUp = new FormGroup({
  parentID : new FormControl('', [Validators.required]),
  email : new FormControl('', [Validators.required, Validators.email]),
  name: new FormControl('', [Validators.required]),
  password : new FormControl('', [Validators.required, Validators.minLength(8)]),
  confirmation : new FormControl('', [Validators.required, Validators.minLength(8)])
});

get parentID() {
  return this.signUp.get('parentID');
  }
get email() {
return this.signUp.get('email');
}
get name() {
  return this.signUp.get('name');
  }
get password() {
return this.signUp.get('password');
}
get confirmation() {
return this.signUp.get('confirmation');
}

onSignUp(form) {
  const email = form.value.email;
  const password = form.value.password;
  const confirmation = form.value.confirmation;
  const parentID = form.value.parentID;
  const name = form.value.name;
  const promise = Promise.resolve(this.authService.signUpChild(email, password, parentID, name));

  promise.then(res => {
    this.router.navigate(['home']);
  }).catch(err => {
    alert (err.message);
  });
  // this.authService.signUpChild(email, password, parentID, name);
  
  // console.log(email, password, parentID, name);
  // this.router.navigate(['child-chores']);
}
ngOnInit() {
}

}