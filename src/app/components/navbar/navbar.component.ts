import { Component, OnInit, Input } from '@angular/core';
import {PointsService} from '../../services/points.service';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  points;
  user;

  constructor(private pointsService: PointsService,
              private authService: AuthService,
              private router: Router) {
    this.points = pointsService.points;
    this.user = authService.user;
  }

  logout(){
    this.authService.logout();
  }

  ngOnInit() {}

}
