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

  constructor(private firestore: AngularFirestore,
              private authService: AuthService,
              private childService: ChildService,
              private parentService: ParentService) {
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

    //const points= chore.payload.doc.data().points;

      //FINISH THIS FUNCTION: Database should be updated to increase points under 
      //children/doc/specific child points + amount earned from chores
      //Chore should then be either deleted or changed to completed

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



