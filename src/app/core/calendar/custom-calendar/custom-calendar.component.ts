/* eslint-disable eqeqeq */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalendarCreatorService } from './calendar-creator.service';
import { Day } from './day.model';
import { DaysService } from '../../common/services/days.service';

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

  public weekDaysName = [];

  constructor(
    public calendarCreator: CalendarCreatorService,
    public daysService: DaysService,
  ) { }

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());

    this.weekDaysName.push('Mo');
    this.weekDaysName.push('Tu');
    this.weekDaysName.push('We');
    this.weekDaysName.push('Th');
    this.weekDaysName.push('Fr');
    this.weekDaysName.push('Sa');
    this.weekDaysName.push('Su');

    const today = new Date();
    this.year = today.getFullYear();
    this.monthNumber = today.getMonth();

    this.fillDaysOfCurrentMonthDays();
    this.selectToday();
  }

  fillDaysOfCurrentMonthDays() {
    this.fillDaysOfMonth(this.monthNumber);
    this.fillDaysOfMonth(this.monthNumber - 1);
    this.fillDaysOfMonth(this.monthNumber + 1);
  }

  fillDaysOfMonth(monthNumber: number) {
    this.daysService.getDaysOfYearAndMonth(this.year, monthNumber).subscribe(res => {
      const days = res['body'];

      // eslint-disable-next-line guard-for-in
      for (const day in days) {
        const date = new Date(days[day]['date']);
        for (const dayOfMonth of this.monthDays) {

          const sameDate = dayOfMonth.number == date.getDate()
            && dayOfMonth.monthIndex == date.getMonth() + 1;
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
      console.log('Year: ' + this.year);
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
      console.log('Year: ' + this.year);
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
