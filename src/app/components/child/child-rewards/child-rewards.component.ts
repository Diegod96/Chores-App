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
  child;
  points;
  pointsLoaded: Promise<boolean>

  constructor(private rewardService: RewardsService,
              private pointsService: PointsService) {
  }

getRewards = () =>
        this.rewardService.getChildRewards().subscribe(res => (
            this.rewards = res
        ))
    
getPoints = () => this.pointsService.getPoints().subscribe(
  (points) => {
      this.points = points;
      this.pointsLoaded = Promise.resolve(true);
  }
);



ngOnInit() {
        this.getRewards();
        this.getPoints();
    }

  redeem(reward) {
    this.rewardService.redeem(reward);
    
  }

}
