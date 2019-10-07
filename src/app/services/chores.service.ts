// import { Injectable } from '@angular/core';
// import {Chore} from '../models/chore.model';
// import {AngularFirestore} from '@angular/fire/firestore';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChoresService {

//   constructor(private firestore: AngularFirestore) {
//   }

//   chores: Chore[] = [
//     {
//       title: 'Take Out The Trash',
//       description: 'Take out the trash from your room, the kitchen and the bathrooms.',
//       points: 2,
//       due: new Date(),
//       status: 'scheduled'
//     },
//     {
//       title: 'Clean Your Room',
//       description: 'Make your bed, put away your clothes, dust the furniture',
//       points: 5,
//       due: new Date(),
//       status: 'scheduled'
//     },
//     {
//       title: 'Walk the Dog',
//       description: 'Take the dog around the block 3 times',
//       points: 5,
//       due: new Date(),
//       status: 'pending'
//     }
//   ];

//   addChore(form){
//     this.firestore.collection('chores')
//         .add({
//           title: form.value.title,
//           description: form.value.description,
//           points: form.value.points,
//           due : form.value.due,
//           status : 'scheduled',
//         })
//         // tslint:disable-next-line:only-arrow-functions
//         .then(function() {
//           console.log('Document successfully written!');
//         })
//         // tslint:disable-next-line:only-arrow-functions
//         .catch(function(error) {
//           console.error('Error writing document: ', error);
//         });

//   }



//   choreCompleted(chore) {

//     const index = this.chores.indexOf(chore);
//     this.chores[index].status = 'complete';
//     this.chores.splice(index, 1);

//   }

//   chorePending(chore) {

//     const index = this.chores.indexOf(chore);
//     this.chores[index].status = 'pending';

//     // this.chores.splice(index, 1);
//   }
//   // edit for chores

// }

import { Injectable } from '@angular/core';
import {Chore} from '../models/chore.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChoresService {

  constructor(private firestore: AngularFirestore) {
  }


  getChores() {
        return this.firestore.collection('chores', ref => ref.where('parentID', '==', 'HGMEYCC5UcTH5X6kTri9mX9n7Kt1'))
            .snapshotChanges();
  }

  addChore(form){
    this.firestore.collection('chores')
        .add({
          title: form.value.title,
          description: form.value.description,
          points: form.value.points,
          due : form.value.due,
          status : 'scheduled',
        })
        // tslint:disable-next-line:only-arrow-functions
        .then(function() {
          console.log('Document successfully written!');
        })
        // tslint:disable-next-line:only-arrow-functions
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });

  }



  choreCompleted(chore) {

    // const index = this.chores.indexOf(chore);
    // this.chores[index].status = 'complete';
    // this.chores.splice(index, 1);

  }

  chorePending(chore) {

    // const index = this.chores.indexOf(chore);
    // this.chores[index].status = 'pending';

    // this.chores.splice(index, 1);



  }

  editChores(chore) {
      this.firestore.collection('chores').doc('y6K1VLmpBAlRvEjs3LHz').update({
          title: 'Does this work?'
      }).then( res => {console.log('Chore updated'); })
          .catch(function(error) {
              console.error('Error updating chore', error);
          });

  }
  // edit for chores

}



