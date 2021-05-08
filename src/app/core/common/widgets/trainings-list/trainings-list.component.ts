import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/core/calendar/custom-calendar/day.model';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss'],
})
export class TrainingsListComponent implements OnInit {

  @Input() day: Day;


  public passed = false;

  constructor() { }

  ngOnInit() {

  }

  dayHasPassed(): boolean {
    const today = new Date();
    const daySelected = new Date(this.day.year, this.day.monthIndex, this.day.number, 23);
    const dayHasPassed = daySelected.getTime() < today.getTime();
    return dayHasPassed;
  }
}
