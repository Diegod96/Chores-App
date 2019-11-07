import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chores';
  loggedIn=undefined;

  constructor(private authService: AuthService){
    this.loggedIn=authService.uid;
  }

}
