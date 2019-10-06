import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-landing',
  templateUrl: './parent-landing.component.html',
  styleUrls: ['./parent-landing.component.css']
})
export class ParentLandingComponent implements OnInit {

  selected;
  signUp;
  login;

  constructor() { }

  ngOnInit() {
    this.selected = false;
    this.signUp = false;
    this.login = false;
  }

  select(x) {
    if (x === 'signUp') {
      this.signUp = true;
    } else {
      this.login = true;
    }

    this.selected = true;

  }


}
