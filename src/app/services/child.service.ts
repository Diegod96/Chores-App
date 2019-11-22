import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { PointsService } from './points.service';
import { ParentService } from './parent.service';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  docID;
  childID;
  childName;
  childPoints;

  constructor(private firestore: AngularFirestore,
              private parentService: ParentService) { }

    setChildNameIDPoints(docId, ID, name, points){
      this.docID=docId;
      this.childID=ID;
      this.childName=name;
      this.childPoints=points;}

    setChildID(ID){
      this.childID=ID;
    }


    getChild() {
      return this.firestore.collection('children', ref => ref.where('childID', '==', this.childID))
          .snapshotChanges();
    }

    getChildPoints() {
      return this.firestore.collection('points').doc(this.childID)
          .snapshotChanges();
    }

  addChild(parentID, childName, childID){
    this.firestore.collection('children').doc(childID)
    .set({
      name: childName,
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

