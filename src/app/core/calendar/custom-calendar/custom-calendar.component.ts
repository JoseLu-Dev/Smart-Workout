import { Component, OnInit } from '@angular/core';
import { CalendarCreatorService } from './calendar-creator.service';
import { Day } from './day.model';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss'],
})
export class CustomCalendarComponent implements OnInit {
  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName = [];

  constructor(public calendarCreator: CalendarCreatorService) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());

    this.weekDaysName.push('Mo');
    this.weekDaysName.push('Tu');
    this.weekDaysName.push('We');
    this.weekDaysName.push('Th');
    this.weekDaysName.push('Fr');
    this.weekDaysName.push('Sa');
    this.weekDaysName.push('Su');

    this.year = new Date().getFullYear();
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber === 12) {
      this.monthNumber = 0;
      this.year++;
      console.log('Year: ' + this.year);
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth(): void{
    this.monthNumber--;

    if (this.monthNumber < 0) {
      this.monthNumber = 11;
      this.year--;
      console.log('Year: ' + this.year);
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onDayClicked(day: any){
    console.log(day);
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[15].monthIndex;
  }

}
