import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { ChildService } from './child.service';
import { ParentService } from './parent.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token;

  ///ERRORS W/ USER- FIX THIS

  user= 'child';
  uid;

  constructor(private router: Router,
              private childService: ChildService,
              private parentService: ParentService) {
  }

  signUpParent(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response => {
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => {
              this.token = token;
                this.uid = firebase.auth().currentUser.uid;
                this.user='parent';
                console.log(this.uid)
          }).then( 
            response =>{
              this.parentService.addParent(email, this.uid);
              this.router.navigate(['home']);
            })
          .catch(
          error => {console.log(error);
          });
        });
      }

      signUpChild(email: string, password: string, parentID:string, name: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
          response => {
            firebase.auth().currentUser.getIdToken().then(
              (token: string) => {
                  this.token = token;
                    this.uid = firebase.auth().currentUser.uid;
                    this.user='child';
                    console.log(this.uid)
              }).then( 
                response =>{
                  this.childService.addChild(parentID, name, this.uid);
                  this.router.navigate(['child-chores']);
                })
              .catch(
              error => {console.log(error);
              })
            });
          }

  login(email: string, password: string, user: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth().currentUser.getIdToken().then(
                    (token: string) => {
                        this.token = token;
                        this.uid = firebase.auth().currentUser.uid;
                        this.user= user;
                        if(user=='parent'){
                          this.parentService.setParentID(firebase.auth().currentUser.uid);}
                        else {
                          this.childService.setChildID(firebase.auth().currentUser.uid)
                        }
                    })
                    .then(response => {
                      if(this.user=='child'){
                        this.router.navigate(['child-chores']);}
                      else{
                        this.router.navigate(['home']);}
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
    this.router.navigate(['']);
}


}

