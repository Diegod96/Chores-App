import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  parentID;
  user;

  constructor(private authService: AuthService) {
    this.parentID=authService.uid;
    this.user= authService.user;
   }

  ngOnInit() {
  }

}
