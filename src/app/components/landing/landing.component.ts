import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  selected;
  parent;
  child;

  constructor() { }

  ngOnInit() {
    this.selected = false;
    this.parent = false;
    this.child = false;
  }

  enter(x) {
    if (x === 'child') {
      this.child = true;
    } else {
      this.parent = true;
    }

    this.selected = true;

  }

}
