import { Component, OnInit } from '@angular/core';
import {RewardsService} from '../../../services/rewards.service';
import {PointsService} from '../../../services/points.service';
import {AuthService} from '../../../services/auth.service';
import {ParentService} from '../../../services/parent.service';
import { ChildService } from 'src/app/services/child.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
 

  user;
  child;
  rewards;
  points;


  constructor(private rewardService: RewardsService,
              private pointsService: PointsService,
              private authService: AuthService,
              private parentService: ParentService,
              private childService: ChildService,
              private router: Router) {

    this.user= authService.user;
    this.child= childService.childName;
  }

  getRewards = () =>
    this.rewardService.getChildRewards().subscribe(res => (
    this.rewards = res
      ))

      

  ngOnInit() {
      this.getRewards();
  }


  edit(reward) {

    const promise1 = Promise.resolve(
      this.rewardService.setCurrentRewardToEdit(reward));
    
    promise1.then(res =>{
      this.router.navigate(['add-reward', reward.payload.doc.id])})
      .catch(error => {
      console.error('onRejected function called: ' + error.message);}
      ) 
  }

}
