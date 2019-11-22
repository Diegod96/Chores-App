import { Component, OnInit } from '@angular/core';
import {ParentService} from '../../../services/parent.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {


  constructor( private parentService: ParentService) {
  }

  ngOnInit() {
  }

  // addChild(child) {
  //
  // }



}
