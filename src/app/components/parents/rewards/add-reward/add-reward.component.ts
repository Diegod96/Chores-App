import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {RewardsService} from '../../../../services/rewards.service';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import { ChildService } from 'src/app/services/child.service';


@Component({
  selector: 'app-add-reward',
  templateUrl: './add-reward.component.html',
  styleUrls: ['./add-reward.component.css']
})
export class AddRewardComponent implements OnInit {

  edit=false;
  rewardForm: FormGroup;
  child;
  editTitle;
  editDescription;
  editPoints;

  constructor(private rewardService: RewardsService,
              private childService: ChildService,
              private router: Router,
              private formBuilder: FormBuilder) { 
                
                this.child=childService.childName;
                this.edit=rewardService.edit;
                this.editTitle=rewardService.title;
                this.editDescription=rewardService.description;
                this.editPoints=rewardService.points;
              } 

  // get title() {
  //   return this.add.get('title');
  // }

  // get description() {
  //   return this.add.get('description');
  // }

  // get points() {
  //   return this.add.get('points');
  // }


  onAdd(form) {
    const title = form.value.title;
    const description = form.value.description;
    const points = form.value.points;


    if(this.edit){
      this.rewardService.editReward(form);
    }
    else{
      this.rewardService.addReward(form);
    }
    this.reset();
    this.router.navigate(['child/' + this.childService.childID]);
   
  }

  reset() {
    this.rewardService.setEdit(false);
    this.rewardForm.reset(); }

  ngOnInit() {

    if (this.edit) {
    
      this.rewardForm = this.formBuilder.group({
           title: [this.editTitle, Validators.required],
           description: [this.editDescription, Validators.required],
           points: [this.editPoints, Validators.required],
           
       });
  } else {
      this.rewardForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        points: ['', Validators.required],
      });
  }}
  }


