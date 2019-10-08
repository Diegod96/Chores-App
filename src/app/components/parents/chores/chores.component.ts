// import { Component, OnInit } from '@angular/core';
// import { ChoresService } from '../../services/chores.service';
// import {PointsService} from '../../services/points.service';
// import {AuthService} from '../../services/auth.service';
// import {ParentService} from '../../services/parent.service';

// @Component({
//   selector: 'app-chores',
//   templateUrl: './chores.component.html',
//   styleUrls: ['./chores.component.css']
// })
// export class ChoresComponent implements OnInit {

//   chores;
//   user;
//   children;

//   constructor(private choreService: ChoresService,
//               private pointsService: PointsService,
//               private authService: AuthService,
//               private parentService: ParentService) {
//     this.chores = choreService.chores;
//     this.user= authService.user;
//     this.children= parentService.children;
//   }

//   ngOnInit() {
//   }

//   complete(chore, points) {
//       if (this.user === 'parent') {
//         this.choreService.choreCompleted(chore);
//         this.pointsService.addPoints(points);
//         console.log(this.pointsService.points);
//       } else {
//         console.log('Error: User is a child');
//       }
//   }

//   pending(chore) {
//     this.choreService.chorePending(chore);
//   }



// }


import { Component, OnInit } from '@angular/core';
import { ChoresService } from '../../../services/chores.service';
import {PointsService} from '../../../services/points.service';
import {AuthService} from '../../../services/auth.service';
import {ParentService} from '../../../services/parent.service';
import { ChildService } from 'src/app/services/child.service';
import { RewardsService } from 'src/app/services/rewards.service';

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


  constructor(private choreService: ChoresService,
              private pointsService: PointsService,
              private authService: AuthService,
              private parentService: ParentService,
              private childService: ChildService,
              private rewardService: RewardsService) {
    this.user= authService.user;
    this.child= childService.childName;
    this.points= childService.childPoints;
  }

getChores = () =>
        this.choreService.getChildChores().subscribe(res => (
            this.chores = res
        ))


//         // TEMPORARYRYYYYRYRYRYRYR

// getRewards = () =>
//   this.rewardService.getChildRewards().subscribe(res => (
//     this.rewards = res
//         ))

    ngOnInit() {
        this.getChores();
        // this.getRewards();
    }

  complete(chore, points) {
      if (this.user === 'parent') {
        this.choreService.choreCompleted(chore);
        this.pointsService.addPoints(points);
        console.log(this.pointsService.points);
      } else {
        console.log('Error: User is a child');
      }
  }

  pending(chore) {
    this.choreService.chorePending(chore);
  }



}

