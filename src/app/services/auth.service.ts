import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token;
  user;
  uid;


  constructor(private router: Router) {

    this.user = 'parent';
  }


  signUpParent(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response =>{
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => {
              this.token = token;
                this.uid = firebase.auth().currentUser.uid;
                console.log(this.uid)
          }).catch(
          error => {console.log(error);
          });
        });
      }
    



  loginParent(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {

                // this.router.navigate(['/accounts']);
                firebase.auth().currentUser.getIdToken().then(
                    (token: string) => {
                        this.token = token;
                        this.uid = firebase.auth().currentUser.uid;
                        console.log(this.uid)
                    }).catch(
                    error => {console.log(error);
                    });
            });
}


logout() {
    firebase.auth().signOut().then(() => console.log('logged you out')).catch(
        error => console.log(error)
    );
    this.token = null;
    // this.router.navigate(['']);
}





}

