import { Component, OnInit} from '@angular/core';
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
  pointsLoaded: Promise<boolean>

  constructor(private pointsService: PointsService,
              private authService: AuthService,
              private router: Router) {
    this.user = authService.user;
  }

  getPoints = () => this.pointsService.getPoints().subscribe(
    (points) => {
        this.points = points;
        this.pointsLoaded = Promise.resolve(true);
    }
  );

  logout(){
    this.authService.logout();
  }

  ngOnInit() {
    this.getPoints();
  }

}
