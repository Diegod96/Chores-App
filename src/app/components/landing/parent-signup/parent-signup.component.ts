import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ParentService } from 'src/app/services/parent.service';

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
    password : new FormControl('', [Validators.required])
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
