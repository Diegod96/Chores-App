import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {AngularFirestore} from '@angular/fire/firestore';


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

parentID;

  constructor(private firestore: AngularFirestore) { }


setParentID(ID){
  this.parentID=ID;
}

// addParent(email, ID){
//     this.firestore.collection('parent')
//     .add({
//       email: email,
//       parentID: ID,
//       user: "parent"
//     })
//     .then(function() {
//       console.log('Document successfully written!');
//     })
//     .catch(function(error) {
//       console.error('Error writing document: ', error);
//     });
//    }

addParent(email, ID){
  this.firestore.collection('parent').doc(ID)
  .set({
    email: email,
    parentID: ID,
    user: "parent"
  })
  .then(function() {
    console.log('Document successfully written!');
  })
  .catch(function(error) {
    console.error('Error writing document: ', error);
  });
 }

  // deleteChild(child) {
  //   this.children.pop(child);
  // }


  getChildren() {
    return this.firestore.collection('children', ref => ref.where('parentID', '==', this.parentID))
        .snapshotChanges();
}


}
