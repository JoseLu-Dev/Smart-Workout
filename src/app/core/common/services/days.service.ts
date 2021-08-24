import { map, first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject, of } from 'rxjs';
import { TrainingsDay, TrainingSpecs } from '../models/trainings-day.model';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  private daysUrl = `${environment.backendUrl}/days`;

  private daysCache = new Array<any>(12);

  constructor(private http: HttpClient,) { }

  getDaysOfYearAndMonth(year: number, month: number) {
    if (this.daysCache[month - 1]) {
      return of(this.daysCache[month - 1]);
    }

    return this.http.get(`${this.daysUrl}/${year}/${month}`).pipe(
      first(),
      map(response => this.daysCache[month - 1] = response)
    );
  }

  addTrainingDay(month: number, trainingDay: TrainingsDay){
    this.daysCache[month].push(trainingDay);
    console.log(month)
    console.log(trainingDay);
    this.daysCache[month] = new Array(...this.daysCache[month]);
    this.daysCache = new Array(...this.daysCache);
  }

  getDay(year: number, month: number, day: number) {
    return this.http.get(`${this.daysUrl}/${year}/${month}/${day}`, { observe: 'response' }).pipe(first());
  }

}
