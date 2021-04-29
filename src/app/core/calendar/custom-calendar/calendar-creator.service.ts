import { Day } from './day.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarCreatorService {
  private currentYear: number;
  private currentMonthIndex: number;

  constructor() {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth();
  }

  public getCurrentMonth(): Day[] {
    return this.getMonth(this.currentMonthIndex, this.currentYear);
  }

  public getMonth(monthIndex: number, year: number): Day[] {
    const days = [];

    const firstDay = this.createDay(1, monthIndex, year);

    //create empty days
    if(firstDay.weekDayNumber === 0) {
      for(let i = 1; i <= 6; i++) {
        days.push({
          weekDayNumber: i,
          monthIndex: monthIndex,
          year: year,
        } as Day);
      }
    }
    for (let i = 1; i < firstDay.weekDayNumber; i++) {
      days.push({
        weekDayNumber: i,
        monthIndex: monthIndex,
        year: year,
      } as Day);
    }
    days.push(firstDay);
    //

    const countDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    for (let i = 2; i < countDaysInMonth + 1; i++) {
      const day: Day = this.createDay(i, monthIndex, year);
      day.isCurrentDay = this.isCurrentDay(day);
      days.push(day);
    }

    return days;
  }

  public getMonthName(monthIndex: number): string {
    switch (monthIndex) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';

      default:
        return '';
    }
  }

  public getWeekDayName(weekDay: number): string {
    switch (weekDay) {
      case 0:
        return 'Su'; // Sunday
      case 1:
        return 'Mo'; // Monday
      case 2:
        return 'Tu'; // Tuesday
      case 3:
        return 'We'; // Wednesday
      case 4:
        return 'Th'; // Thursday
      case 5:
        return 'Fr'; // Friday
      case 6:
        return 'Sa'; // Saturday

      default:
        return '';
    }
  }

  private createDay(dayNumber: number, monthIndex: number, year: number) {
    const day = new Day();

    day.monthIndex = monthIndex;
    day.month = this.getMonthName(monthIndex);

    // eslint-disable-next-line id-blacklist
    day.number = dayNumber;
    day.year = this.currentYear;

    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay();
    day.weekDayName = this.getWeekDayName(day.weekDayNumber);

    return day;
  }

  private isCurrentDay(day: Day): boolean {
    const today: Date = new Date();

    const isCurrentDay: boolean =
      day.year === today.getFullYear()
      && day.monthIndex === today.getMonth()
      && day.number === today.getDate();

    return isCurrentDay;
  }
}
