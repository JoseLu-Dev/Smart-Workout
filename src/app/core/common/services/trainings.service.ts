import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TrainingsDay } from './../models/trainings-day.model';
import { Training } from './../models/exercise-set.model';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private trainingsUrl = `${environment.backendUrl}/trainings`;
  private daysUrl = `${environment.backendUrl}/days`;

  constructor(private http: HttpClient,) { }

  /**
   * Sends a day of training(s) to the backend to be saved
   *
   * @param trainingDay
   * @returns backend response with generated training id
   */
  saveTrainingDay(trainingDay: TrainingsDay) {
    return this.http.put(`${this.daysUrl}`, trainingDay);
  }

  /**
   * Sends a training to the backend to be saved
   *
   * @param training
   * @returns
   */
  saveTraining(training: Training) {
    return this.http.patch(`${this.trainingsUrl}/${training.id}`, training).subscribe();
  }

  /**
   * Sends a training to the backend to be saved
   *
   * @param trainingSets
   * @returns
   */
  getTraining(id: string): Observable<any> {
    return this.http.get(`${this.trainingsUrl}/${id}`);
  }
}
