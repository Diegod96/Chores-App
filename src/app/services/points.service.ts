import { Injectable, EventEmitter, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  points;

  constructor() {
    this.points = 10;
  }

  addPoints(amount) {
    this.points += amount;
  }

  minusPoints(amount) {

    if (this.points >= amount) {
    this.points = this.points - amount;
    console.log(this.points)}

  }
}
