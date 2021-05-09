import { map, first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  private daysUrl = `${environment.backendUrl}/days`;


  constructor(private http: HttpClient,) { }

  getDaysOfYearAndMonth(year: number, month: number) {
    return this.http.get(`${this.daysUrl}/${year}/${month}`, { observe: 'response' }).pipe(first());
  }

  getDay(year: number, month: number, day: number) {
    return this.http.get(`${this.daysUrl}/${year}/${month}/${day}`, { observe: 'response' }).pipe(first());
  }

}
