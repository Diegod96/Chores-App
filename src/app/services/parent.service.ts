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

  constructor(private authService: AuthService,
              private firestore: AngularFirestore) { }


   addChild(childEmail, childName){
    this.firestore.collection('family')
    .add({
      parentID: this.authService.uid,
      email: childEmail,
      name: childName
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
    return this.firestore.collection('family', ref => ref.where('parentID', '==', 'HGMEYCC5UcTH5X6kTri9mX9n7Kt1'))
        .snapshotChanges();
}

}
