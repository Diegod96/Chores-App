import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';
import { AuthService } from 'src/app/services/auth.service';
import { ParentService } from 'src/app/services/parent.service';
import { RewardsService } from 'src/app/services/rewards.service';
import { ChildService } from 'src/app/services/child.service';

@Component({
  selector: 'app-child-rewards',
  templateUrl: './child-rewards.component.html',
  styleUrls: ['./child-rewards.component.css']
})
export class ChildRewardsComponent implements OnInit {

  rewards;
  childPoints;

  constructor(private rewardService: RewardsService,
              private childService: ChildService,
              private pointsService: PointsService,
              private authService: AuthService,
              private parentService: ParentService) {
    this.childPoints= childService.childPoints;
    
  }

getRewards = () =>
        this.rewardService.getChildRewards().subscribe(res => (
            this.rewards = res
        ))



    ngOnInit() {
        this.getRewards();
    }

  redeem(reward) {

  }

}
