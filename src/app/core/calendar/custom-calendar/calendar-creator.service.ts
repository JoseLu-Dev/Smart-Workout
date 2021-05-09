import { Day } from './day.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarCreatorService {
  private currentYear: number;
  private currentMonthIndex: number;

  private firstTimeGenerated = true;

  constructor() {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth();
  }

  public getCurrentMonth(): Day[] {
    return this.getMonth(this.currentMonthIndex, this.currentYear);
  }

  public getMonth(monthIndex: number, year: number): Day[] {
    this.currentMonthIndex = monthIndex;
    this.currentYear = year;

    let days = [];

    const firstDay = this.createDay(1, monthIndex, year);

    let numberOfLastDays = firstDay.weekDayNumber === 0 ? 6 : firstDay.weekDayNumber - 1;
    numberOfLastDays = numberOfLastDays === 0 ? 7 : numberOfLastDays;
    days = this.getLastDaysOfMonth(year, monthIndex, numberOfLastDays);

    const countDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    for (let i = 1; i < countDaysInMonth + 1; i++) {
      const day: Day = this.createDay(i, monthIndex, year);
      days.push(day);
    }

    const numberDaysNextMonth = 42 - days.length;

    days = days.concat(this.getFirstDaysOfMonth(year, monthIndex, numberDaysNextMonth));

    return days;
  }


  getLastDaysOfMonth(year: number, monthIndex: number, days: number) {
    return this.getDaysOfMonth(year, monthIndex, days, true);
  }

  getFirstDaysOfMonth(year: number, monthIndex: number, days: number) {
    return this.getDaysOfMonth(year, monthIndex, days, false);
  }

  getDaysOfMonth(year: number, monthIndex: number, days: number, getLastDays: boolean) {
    const lastDayMonth = new Date(year, monthIndex, 0).getDate();
    const lastDays = [];

    for (let i = 0; i < days; i++) {
      let day;
      if (getLastDays) {
        if (monthIndex - 1 === - 1) {
          monthIndex = 13;
          year--;
        }
        day = this.createDay(lastDayMonth - i, monthIndex - 1, year);
      }
      else {
        if (monthIndex + 1 === 12) {
          monthIndex = -1;
          year++;
        }
        day = this.createDay(i + 1, monthIndex + 1, year);
      }

      day.isCurrentMonth = false;
      lastDays.push(day);
    }

    if (getLastDays) { lastDays.reverse(); }

    return lastDays;
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
    day.year = year;

    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay();
    day.weekDayName = this.getWeekDayName(day.weekDayNumber);

    day.isCurrentDay = this.isCurrentDay(day);

    if (this.firstTimeGenerated && day.isCurrentDay) {
      day.selected = true;
      this.firstTimeGenerated = false;
    }

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
