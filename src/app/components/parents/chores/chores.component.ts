import { Component, OnInit } from '@angular/core';
import { ChoresService } from '../../../services/chores.service';
import {PointsService} from '../../../services/points.service';
import {AuthService} from '../../../services/auth.service';
import {ParentService} from '../../../services/parent.service';
import { ChildService } from 'src/app/services/child.service';
import { RewardsService } from 'src/app/services/rewards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chores',
  templateUrl: './chores.component.html',
  styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {

  chores;
  user;
  child;
  rewards;
  points;
  now= Date.now()


  constructor(private choreService: ChoresService,
              private pointsService: PointsService,
              private authService: AuthService,
              private parentService: ParentService,
              private childService: ChildService,
              private rewardService: RewardsService,
              private router: Router
              ) {
    this.user= authService.user;
    this.child= childService.childName;
    this.points= childService.childPoints;
  }

getChores = () =>
        this.choreService.getChildChores().subscribe(res => (
            this.chores = res
        ))

    ngOnInit() {
        this.getChores();
    }

  complete(chore, points) {
      if (this.user === 'parent') {
        this.choreService.choreCompleted(chore);
      } else {
        console.log('Error: User is a child');
      } 
  }

  deductPoints(chore, points) {

      this.choreService.choreIncomplete(chore);

}


  //ADD EDIT FUNCTIONALITY
  edit(chore) {

    const promise1 = Promise.resolve(
      this.choreService.setCurrentChoreToEdit(chore));
    
    promise1.then(res =>{
      this.router.navigate(['add-chore', chore.payload.doc.id])})
      .catch(error => {
      console.error('onRejected function called: ' + error.message);}
      ) 
  }
}
