import { Component, OnInit } from '@angular/core';
import {RewardsService} from '../../services/rewards.service';
import {PointsService} from '../../services/points.service';
import {AuthService} from '../../services/auth.service';
import {ParentService} from '../../services/parent.service';


@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  rewards;
  points;
  user;
  children;

  constructor(private rewardService: RewardsService,
              private pointsService: PointsService,
              private authService: AuthService,
              private parentService: ParentService) {
    this.rewards = rewardService.rewards;
    this.points = pointsService.points;
    this.user = this.authService.user;
    this.children = this.parentService.children;
  }

  redeem(amount, reward) {

    if (this.pointsService.points >= amount) {

      // WORK AROUND BELOW **BUG FIX TO MAKE THIS BETTER**

      this.points -= amount;
      this.pointsService.minusPoints(amount);
      this.rewardService.redeem(reward);
    }

  }


  edit(title) {
    this.rewardService.edit(title);
  }

  ngOnInit() {}

}
