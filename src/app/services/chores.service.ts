import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { ChildService } from './child.service';
import { ParentService } from './parent.service';

@Injectable({
  providedIn: 'root'
})
export class ChoresService {

  childId;
  childDocID;

  constructor(private firestore: AngularFirestore,
              private authService: AuthService,
              private childService: ChildService,
              private parentService: ParentService) {
                this.childDocID=childService.docID
  }

  getChildChores() {
    return this.firestore.collection('chores', ref => ref.where('childID', '==', this.childService.childID))
        .snapshotChanges();
  }

  addChore(form){
    this.firestore.collection('chores')
        .add({
          childID: this.childService.childID,
          parentID: this.parentService.parentID,
          title: form.value.title,
          description: form.value.description,
          points: form.value.points,
          due : form.value.due,
          status : 'scheduled',
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
  }



  choreCompleted(chore) {

      const points  = Number(chore.payload.doc.data().points);
      const increment = firebase.firestore.FieldValue.increment(points);

      this.firestore.collection('chores').doc(chore.payload.doc.id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });

      this.firestore.collection('points').doc(this.childService.childID).update({
          points: increment
      }).then( res => {console.log('Status updated'); })
          .catch(function(error) {
              console.error('Error updating chore', error);
          });

  }

  choreIncomplete(chore) {

    const points  = Number(chore.payload.doc.data().points);
    const decrement = firebase.firestore.FieldValue.increment(0-points);

    this.firestore.collection('chores').doc(chore.payload.doc.id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });

    this.firestore.collection('points').doc(this.childService.childID).update({
        points: decrement
    }).then( res => {console.log('Status updated'); })
        .catch(function(error) {
            console.error('Error updating chore', error);
        });

}




  chorePending(chore) {

    this.firestore.collection('chores').doc(chore.payload.doc.id).update({
      status: 'pending'}).
      then( res => {console.log('Status updated'); })
      .catch(function(error) {
          console.error('Error updating chore', error);
      });
  }

  editChores(chore) {

    //UPDATE FROM HARD CODE

      this.firestore.collection('chores').doc('y6K1VLmpBAlRvEjs3LHz').update({
          title: 'Does this work?'
      }).then( res => {console.log('Chore updated'); })
          .catch(function(error) {
              console.error('Error updating chore', error);
          });
  }
}



