import { Injectable } from '@angular/core';
// import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ParentService {

   children = [
     {
       name: 'Taylor Palm',
       username: 'tay_palm'
     }, {
       name: 'Diego Delgado',
      username: 'diego_delgado' },
     {
       name: 'Sean Casey',
       username: 'sean_casey'
     }, {
       name: 'Sarah Alwell',
       username: 'sarah_alwell',
     }
   ];

  constructor() { }

  signUpChild(child) {
    this.children.push(child);
  }

  deleteChild(child) {
    const index = this.children.indexOf(child)
    this.children.splice(index, 1);
  }

}
