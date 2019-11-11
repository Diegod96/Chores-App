import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
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
  edit;
  choreForm: FormGroup;
  editTitle;
  editDescription;
  editPoints;
  editDue;

  constructor(private childService: ChildService,
              private choreService: ChoresService,
              private router: Router,
              private formBuilder: FormBuilder,) {

                this.child=childService.childName;
                this.edit=choreService.edit;
                this.editTitle=choreService.title;
                this.editDescription=choreService.description;
                this.editPoints=choreService.points;
                this.editDue=choreService.due;
               }

  // add = new FormGroup({
  //   title : new FormControl('',
  //       [Validators.required]),
  //   description : new FormControl(''),
  //   points : new FormControl('',
  //       [Validators.required])
  //   ,
  //   due : new FormControl('',
  //       [Validators.required]),
  // });

  // get title() {
  //   return this.choreForm.get('title');
  // }

  // get description() {
  //   return this.choreForm.get('description');
  // }

  // get points() {
  //   return this.choreForm.get('points');
  // }

  // get due() {
  //   return this.choreForm.get('due');
  // }


  onAdd(form) {

    if(this.edit){
        this.choreService.editChores(form);
    }
    else{
        this.choreService.addChore(form);
    }
    this.reset();
    this.router.navigate(['child/' + this.childService.childID]);

  }

  reset() {
    this.choreService.setEdit(false);
    this.choreForm.reset(); }


  ngOnInit() {

    if (this.edit) {
    
      this.choreForm = this.formBuilder.group({
           title: [this.editTitle, Validators.required],
           description: [this.editDescription, Validators.required],
           due: [this.editDue, Validators.required],
           points: [this.editPoints, Validators.required],
           
       });
  } else {
      this.choreForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        due: ['', Validators.required],
        points: ['', Validators.required],
      });
  }}

  }


