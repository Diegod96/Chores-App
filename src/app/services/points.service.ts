import { Injectable, EventEmitter, } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  points;

  constructor(private firestore: AngularFirestore) {
    this.points = 10;
  }

  // getPoints(){
  //   return this.firestore.collection('children', ref => ref.where('childID', '==', this.childID))
  //         .snapshotChanges();
  // }

  addPoints(amount) {
    this.points += amount;
  }

  minusPoints(amount) {

    if (this.points >= amount) {
    this.points = this.points - amount;
    console.log(this.points)}

  }
}
