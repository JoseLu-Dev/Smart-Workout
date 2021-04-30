import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomCalendarComponent } from './custom-calendar/custom-calendar.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  @ViewChild(CustomCalendarComponent)
  calendar: CustomCalendarComponent;

  constructor() { }

  ngOnInit() {
  }

}
