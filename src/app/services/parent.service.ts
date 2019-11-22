import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class ParentService {

parentID;
childrenCreated;

  constructor(private firestore: AngularFirestore) {
   }


setParentID(ID){
  this.parentID=ID;
}

addParent(email, ID){
  this.firestore.collection('parent').doc(ID)
  .set({
    email: email,
    parentID: ID,
    user: "parent",
    childrenCreated: false
  })
  .then(function() {
    console.log('Document successfully written!');
  })
  .catch(function(error) {
    console.error('Error writing document: ', error);
  });
 }

  getChildren() {
    // const db= firebase.firestore();
    // const promises= []

    // const promise1 = Promise.resolve(
    //   db.collection("children").where("parentID", "==", this.parentID)
    //   .get().then(function(querySnapshot) {
    //       querySnapshot.forEach(function(doc) {
    //           promises.push(doc.data());}
    //       );
    //       console.log("Children", promises);
    //   })
      
    //   );

    //   promise1.then(res=>{
    //     console.log(promises);
    //     return promises;
    //   })

   

    // db.collection("children").where("parentID", "==", this.parentID)
    // .onSnapshot(function(querySnapshot) {
    //     var children = [];
    //     querySnapshot.forEach(function(doc) {
    //         children.push(doc.data());}
    //     );
    //     console.log("Children", children);
    //     return children;
    // })
  
    return this.firestore.collection('children', ref => ref.where('parentID', '==', this.parentID))
        .snapshotChanges();
  }
}
// childAccountCreated(parentID){
//     this.firestore.collection('parent').doc(parentID)
//     .set({
//       childrenCreated: true
//     })
//     .then(function() {
//       console.log('Document successfully written!');
//     })
//     .catch(function(error) {
//       console.error('Error writing document: ', error);
//     });

// }


// getChildAccountCreated(){

//   const db= firebase.firestore();
//   var docRef = db.collection("parent").doc("ID");

//   docRef.get().then(function(doc) {
//       if (doc.exists) {
//           console.log("Document data:", doc.data());
//       } else {
//           // doc.data() will be undefined in this case
//           console.log("No such document!");
//       }
//   }).catch(function(error) {
//       console.log("Error getting document:", error);
//   });
// }



