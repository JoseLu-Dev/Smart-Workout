import { Component, Input, OnInit } from '@angular/core';
import { TrainingsDay } from '../../models/trainings-day.model';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss'],
})
export class TrainingsListComponent implements OnInit {

  @Input() trainingsDay: TrainingsDay;


  public passed = false;

  constructor() { }

  ngOnInit() {

  }

  dayHasPassed(): boolean {
    const today = new Date();
    const daySelected = new Date(this.trainingsDay.date);
    daySelected.setHours(23);
    const dayHasPassed = daySelected.getTime() < today.getTime();
    return dayHasPassed;
  }
}
