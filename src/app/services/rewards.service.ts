import { Injectable } from '@angular/core';
import { Reward} from '../models/rewards.model';
import {AngularFirestore} from '@angular/fire/firestore';
import { ChildService } from './child.service';
import { AuthService } from './auth.service';
import { ParentService } from './parent.service';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  edit
  title;
  description;
  points;
  due;
  currentRewardID;

  constructor(private firestore: AngularFirestore,
              private childService: ChildService,
              private parentService: ParentService,
              private authService: AuthService,
              ) {
  }

  getChildRewards() {
    return this.firestore.collection('rewards', ref => ref.where('childID', '==', this.childService.childID))
        .snapshotChanges();
}

setEdit(x){
  this.edit=x;
}

setCurrentRewardToEdit(reward){
  this.edit=true;
  this.title= reward.payload.doc.data().title;
  this.description= reward.payload.doc.data().description;
  this.points= reward.payload.doc.data().points;
  this.currentRewardID= reward.payload.doc.id;

  console.log(this.edit, this.title, this.description, this.points,
    this.due, this.currentRewardID)
}


  addReward(form) {
    this.firestore.collection('rewards')
      .add({
        childID: this.childService.childID,
        parentID: this.parentService.parentID,
        title: form.value.title,
        description: form.value.description,
        points: form.value.points
      })
      .then(function() {
        console.log('Document successfully written!');
      })
      .catch(function(error) {
        console.error('Error writing document: ', error);
      });

  }


  editReward(form) {
    this.firestore.collection('rewards').doc(this.currentRewardID).update({
        title: form.value.title,
        description: form.value.description,
        points: form.value.points
    }).then( res => {console.log('Reward updated'); })
        .catch(function(error) {
            console.error('Error updating chore', error);
        });
}

  redeem(reward) {
    const points  = Number(reward.payload.doc.data().points);
    const decrement = firebase.firestore.FieldValue.increment(0-points);

    this.firestore.collection('rewards').doc(reward.payload.doc.id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
 
    this.firestore.collection('points').doc(this.authService.uid).update({
      points: decrement
    }).then( res => {console.log('Status updated'); })
      .catch(function(error) {
          console.error('Error updating chore', error);
    });
  }


}
