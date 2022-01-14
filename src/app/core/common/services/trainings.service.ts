import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TrainingsDay, TrainingSpecs } from './../models/trainings-day.model';
import { Training } from '../models/training.models';
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

  updateTrainingDay(trainingDay: TrainingsDay) {
    // eslint-disable-next-line no-underscore-dangle
    return this.http.patch(`${this.daysUrl}/${trainingDay._id}`, trainingDay);
  }

  /**
   * Sends a training to the backend to be saved
   *
   * @param training
   * @returns
   */
  saveTraining(training: Training) {
    return this.http.patch(`${this.trainingsUrl}/${training.id}`, training);
  }

  /**
   * Ask backend for a specific training
   *
   * @param id
   * @returns
   */
  getTraining(id: string): Observable<Training> {
    return this.http.get<Training>(`${this.trainingsUrl}/${id}`);
  }

  /**
   * Ask backend for a specific training specs
   *
   * @param id
   * @returns
   */
  getTrainingSpecs(id: string): Observable<TrainingSpecs> {
    return this.http.get<TrainingSpecs>(`${this.daysUrl}/training-specs/${id}`);
  }

  /**
   * Delete training
   *
   * @param id training id
   */
  deleteTraining(id: string) {
    return this.http.delete(`${this.trainingsUrl}/${id}`, { responseType: 'text' }).subscribe();
  }

  /**
   * Sends a date and a training to create a new one training from the one sent in the date sent
   *
   * @returns id of the new training created
   */
  putTrainingFromExisting(trainingDay: TrainingsDay, date: Date) {
    return this.http.put(`${this.daysUrl}/from-existing`, { trainingDay: trainingDay, date: date });
  }
}
