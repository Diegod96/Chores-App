import { Component, OnInit, Input } from '@angular/core';
import {PointsService} from '../../services/points.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  points;
  user;

  constructor(private pointsService: PointsService,
              private authService: AuthService) {
    this.points = pointsService.points;
    this.user = authService.user;
  }

  ngOnInit() {}

}
