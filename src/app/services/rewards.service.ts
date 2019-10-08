import { Injectable } from '@angular/core';
import { Reward} from '../models/rewards.model';
import {AngularFirestore} from '@angular/fire/firestore';
import { ChildService } from './child.service';
import { AuthService } from './auth.service';
import { ParentService } from './parent.service';


@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  constructor(private firestore: AngularFirestore,
              private childService: ChildService,
              private parentService: ParentService) {
  }

  getChildRewards() {
    return this.firestore.collection('rewards', ref => ref.where('childID', '==', this.childService.childID))
        .snapshotChanges();
}

  rewards: Reward[] = [
    {
      title: 'Ice Cream',
      description: 'One ice cream date to Dairy Queen w/ the parent of your choosing',
      points: 10
    },
    {
      title: 'New Game for Xbox',
      description: 'One new game!',
      points: 50
    },
    {
      title: 'Trip to Six Flags ',
      description: 'Six Flags Day for the whole family!! Not redeemable until your brother also recieves 250pts.',
      points: 250
    }
  ];

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

  redeem(reward) {
    const index = this.rewards.indexOf(reward);
    this.rewards.splice(index, 1);
  }

  edit(reward) {
    const index = this.rewards.indexOf(reward);
    this.firestore.collection('rewards').doc('JCquZ1v2AhC16Z0LhFsk').update({
      title: 'Pizza'
    }).then( res => {console.log('Reward updated'); })
        .catch(function(error) {
          console.error('Error updating reward', error);
        });
  }

}
