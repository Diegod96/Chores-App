import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChoresService} from '../../../../services/chores.service';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import { ChildService } from 'src/app/services/child.service';

// @ts-ignore
@Component({
  selector: 'app-add-chore',
  templateUrl: './add-chore.component.html',
  styleUrls: ['./add-chore.component.css']
})
export class AddChoreComponent implements OnInit {

  child;

  constructor(private childService: ChildService,
              private choreService: ChoresService,
              private router: Router) {
              this.child=childService.childName;
               }

  add = new FormGroup({
    title : new FormControl('',
        [Validators.required]),
    description : new FormControl(''),
    points : new FormControl('',
        [Validators.required])
    ,
    due : new FormControl('',
        [Validators.required]),
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

  get due() {
    return this.add.get('due');
  }


  onAdd(form) {

    // HARD CODE FOR VISUALS

    const title = form.value.title;
    const description = form.value.description;
    const points = form.value.points;
    const due = form.value.due;
    const status = 'scheduled';

    const chore = {title, description, points, due, status};

    console.log(title, description, points, due);
    // this.choreService.chores.push(chore);


    // CONNECTS TO THE DATABASE
    //
    this.choreService.addChore(form);

    this.router.navigate(['child/' + this.childService.childID]);

  }


  ngOnInit() {
  }

}
