import { TrainingsDay } from './../models/trainings-day.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss'],
})
export class TrainingsListComponent implements OnInit {

  public completed = true
  public passed = false;

  public trainingsDay: TrainingsDay;

  constructor() { }

  ngOnInit() {
    this.trainingsDay = {
      date: new Date(),
      trainings: [
        {
          name: 'Push',
          color: '#423232',
          completed: true
        }
      ]
    }
  }

}
