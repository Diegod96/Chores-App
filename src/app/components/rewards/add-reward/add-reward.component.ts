import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RewardsService} from '../../../services/rewards.service';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-add-reward',
  templateUrl: './add-reward.component.html',
  // styleUrls: ['./add-reward.component.css']
})
export class AddRewardComponent implements OnInit {

  constructor(private rewardService: RewardsService,
              private router: Router) { }

  add = new FormGroup({
    title : new FormControl('',
        [Validators.required]),
    description : new FormControl(''),
    points : new FormControl('',
        [Validators.required])
  });

  get title() {
    return this.add.get('title');
  }

  get description() {
    return this.add.get('description');
  }

  get points() {
    return this.add.get('points');
  }


  onAdd(form) {
    const title = form.value.title;
    const description = form.value.description;
    const points = form.value.points;

    const reward = {title, description, points};

    console.log(title, description, points);
    this.rewardService.rewards.push(reward);
    this.router.navigate(['rewards']);

    this.rewardService.addReward(form);
  }


  ngOnInit() {
  }

}
