// import { Component, OnInit } from '@angular/core';
// import { ChoresService } from '../../services/chores.service';
// import {PointsService} from '../../services/points.service';
// import {AuthService} from '../../services/auth.service';
// import {ParentService} from '../../services/parent.service';

// @Component({
//   selector: 'app-chores',
//   templateUrl: './chores.component.html',
//   styleUrls: ['./chores.component.css']
// })
// export class ChoresComponent implements OnInit {

//   chores;
//   user;
//   children;

//   constructor(private choreService: ChoresService,
//               private pointsService: PointsService,
//               private authService: AuthService,
//               private parentService: ParentService) {
//     this.chores = choreService.chores;
//     this.user= authService.user;
//     this.children= parentService.children;
//   }

//   ngOnInit() {
//   }

//   complete(chore, points) {
//       if (this.user === 'parent') {
//         this.choreService.choreCompleted(chore);
//         this.pointsService.addPoints(points);
//         console.log(this.pointsService.points);
//       } else {
//         console.log('Error: User is a child');
//       }
//   }

//   pending(chore) {
//     this.choreService.chorePending(chore);
//   }



// }


import { Component, OnInit } from '@angular/core';
import { ChoresService } from '../../services/chores.service';
import {PointsService} from '../../services/points.service';
import {AuthService} from '../../services/auth.service';
import {ParentService} from '../../services/parent.service';

@Component({
  selector: 'app-chores',
  templateUrl: './chores.component.html',
  styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {

  chores;
  user;
  children;

  constructor(private choreService: ChoresService,
              private pointsService: PointsService,
              private authService: AuthService,
              private parentService: ParentService) {
    this.user= authService.user;
    this.children= parentService.children;
  }

getChores = () =>
        this.choreService.getChores().subscribe(res => (
            this.chores = res
        ))


    ngOnInit() {
        this.getChores();
    }

  complete(chore, points) {
      if (this.user === 'parent') {
        this.choreService.choreCompleted(chore);
        this.pointsService.addPoints(points);
        console.log(this.pointsService.points);
      } else {
        console.log('Error: User is a child');
      }
  }

  pending(chore) {
    this.choreService.chorePending(chore);
  }



}

