import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/services/parent.service';
import { ChoresService } from 'src/app/services/chores.service';
import { ChildService } from 'src/app/services/child.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {Observable} from 'rxjs';
import { initializeApp } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  children;
  parentID;
  childrenSet;

  constructor(private parentService: ParentService,
              private choreService: ChoresService,
              private router: Router,
              private childService: ChildService,
              private authService: AuthService
              ) {
    this.parentID= authService.uid;
  }


select(docID, ID, name, points){
  const promise1 = Promise.resolve(
    this.childService.setChildNameIDPoints(docID, ID, name, points)
    );
  
  promise1.then(res =>{
  this.router.navigate(['child/'+ ID]); }).catch(error => {
    console.error('onRejected function called: ' + error.message);}
    ) 
}

// async init(){

//   return Promise.resolve(
//     this.parentService.getChildren()
//     );
// }

getChildren = () =>
this.parentService.getChildren().subscribe(res => (
    this.children = res
))
  ngOnInit() {
    this.getChildren();
  }


}
