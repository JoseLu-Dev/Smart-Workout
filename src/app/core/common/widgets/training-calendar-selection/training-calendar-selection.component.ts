import { CustomCalendarComponent } from '../custom-calendar/custom-calendar.component';
import { Day } from '../custom-calendar/day.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-training-calendar-selection',
  templateUrl: './training-calendar-selection.component.html',
  styleUrls: ['./training-calendar-selection.component.scss'],
})
export class TrainingCalendarSelectionComponent implements OnInit {

  @ViewChild(CustomCalendarComponent)
  calendar: CustomCalendarComponent;

  public daySelected: Day;

  constructor() { }

  ngOnInit() {}

  getAndShowDaySelectedInCalendar(day: Day){
    this.daySelected = day;
  }

}
