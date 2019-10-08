import { Component, OnInit } from '@angular/core';
import { ChoresService } from '../../../services/chores.service';
import {PointsService} from '../../../services/points.service';
import {AuthService} from '../../../services/auth.service';
import {ParentService} from '../../../services/parent.service';

@Component({
  selector: 'app-child-chores',
  templateUrl: './child-chores.component.html',
  styleUrls: ['./child-chores.component.css']
})
export class ChildChoresComponent implements OnInit {

  chores;

  constructor(private choreService: ChoresService,
              private pointsService: PointsService,
              private authService: AuthService,
              private parentService: ParentService) {
  }

getChores = () =>
        this.choreService.getChildChores().subscribe(res => (
            this.chores = res
        ))


    ngOnInit() {
        this.getChores();
    }

  pending(chore) {
    this.choreService.chorePending(chore);
  }
}
