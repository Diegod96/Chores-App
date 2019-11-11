import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { firestore } from 'firebase';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';
import { ChildService } from './child.service';

@Injectable({providedIn: 'root'})

export class PointsService {

  constructor(private firestore: AngularFirestore,
              private childService: ChildService) { }

    points;


    addtoPointsDB(ID){
      this.firestore.collection('points').doc(ID)
        .set({
          points: 0
        })
        .then(function() {
          console.log('Points Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
       }

      getPoints(){
        return this.firestore.collection('points').doc(this.childService.childID).valueChanges();
       }

    }


