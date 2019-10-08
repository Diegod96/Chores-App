import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  childID;
  childName;
  childPoints;

  constructor(
    private firestore: AngularFirestore) { }

    setChildNameIDPoints(ID, name, points){
      this.childID=ID;
      this.childName=name;
      this.childPoints=points;
    }

    setChildID(ID){
      this.childID=ID;
    }

    getChild() {
      return this.firestore.collection('children', ref => ref.where('childID', '==', this.childID))
          .snapshotChanges();
    }

  addChild(parentID, childName, childID){
    this.firestore.collection('children')
    .add({
      name: childName,
      points: 0,
      user: 'child',
      childID: childID,
      parentID: parentID
    })
    .then(function() {
      console.log('Document successfully written!');
    })
    .catch(function(error) {
      console.error('Error writing document: ', error);
    });
   }

}
