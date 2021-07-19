import { NavBarService } from './../nav-bar/nav-bar.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomCalendarComponent } from './custom-calendar/custom-calendar.component';
import { Day } from './custom-calendar/day.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  @ViewChild(CustomCalendarComponent)
  calendar: CustomCalendarComponent;

  public daySelected: Day;

  constructor(private navBarService: NavBarService,) { }

  ngOnInit() {
    this.navBarService.setPageSelected(this.navBarService.calendar);
  }

  getAndShowDaySelectedInCalendar(day: Day){
    this.daySelected = day;
  }

}
