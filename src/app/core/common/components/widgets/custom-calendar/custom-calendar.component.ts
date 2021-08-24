/* eslint-disable eqeqeq */
import { Component, OnInit, Output, EventEmitter, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { CalendarCreatorService } from './calendar-creator.service';
import { Day } from './day.model';
import { DaysService } from '../../../services/days.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss'],
})
export class CustomCalendarComponent implements OnInit {
  @Output() daySelected = new EventEmitter<Day>();

  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  constructor(
    public calendarCreator: CalendarCreatorService,
    public daysService: DaysService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initCalendar();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart && event.url.includes('calendar')) {
        this.initCalendar();
      }
    });
  }

  initCalendar(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());

    const today = new Date();
    this.year = today.getFullYear();
    this.monthNumber = today.getMonth();

    this.fillDaysOfCurrentMonthDays();
    this.selectToday();
  }

  fillDaysOfCurrentMonthDays() {
    const month12 = this.monthNumber + 1;
    this.fillDaysOfMonth(this.year, month12);

    let previousMonth = month12 - 1;
    const previousYear = previousMonth == 0 ? this.year - 1 : this.year;
    previousMonth = previousMonth == 0 ? 12 : previousMonth;

    this.fillDaysOfMonth(previousYear, previousMonth);

    let nextMonth = month12 + 1;
    const nextYear = nextMonth == 13 ? this.year + 1 : this.year;
    nextMonth = nextMonth == 13 ? 1 : nextMonth;

    this.fillDaysOfMonth(nextYear, nextMonth);
  }

  fillDaysOfMonth(year: number, monthNumber: number) {
    this.daysService.getDaysOfYearAndMonth(year, monthNumber).subscribe(res => {
      const days = res;

      // eslint-disable-next-line guard-for-in
      for (const day in days) {
        const date = new Date(days[day]['date']);
        for (const dayOfMonth of this.monthDays) {

          const sameDate = dayOfMonth.number == date.getDate()
            && dayOfMonth.monthIndex == date.getMonth();
          if (sameDate) {
            dayOfMonth.trainingsDay = days[day];
          }
        }
      }
    });
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber === 12) {
      this.monthNumber = 0;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
    this.fillDaysOfCurrentMonthDays();
    this.selectFirstDay();
  }

  onPreviousMonth(): void {
    this.monthNumber--;

    if (this.monthNumber < 0) {
      this.monthNumber = 11;
      this.year--;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
    this.fillDaysOfCurrentMonthDays();
    this.selectFirstDay();
  }

  selectFirstDay() {
    for (const day of this.monthDays) {
      if (day.number === 1 && day.monthIndex === this.monthNumber) {
        day.selected = true;
        this.onDayClicked(day);
        return;
      }
    }
  }

  onDayClicked(day: Day) {
    this.resetSelectedDays();
    day.selected = true;
    this.daySelected.emit(day);
  }

  selectToday(): void {
    for (const day of this.monthDays) {
      if (day.isCurrentDay) {
        this.onDayClicked(day);
        return;
      }
    }
  }

  resetSelectedDays() {
    for (const day of this.monthDays) {
      day.selected = false;
    }
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
  }

}
