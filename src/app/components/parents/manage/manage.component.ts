import { Component, OnInit } from '@angular/core';
import {ParentService} from '../../../services/parent.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {


  children;

  constructor( private parentService: ParentService) {
    this.children = parentService.children;
  }

  ngOnInit() {
  }

  // addChild(child) {
  //
  // }



}
