import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  constructor() { }

  getWeight(){
    return 50;
  }
}
