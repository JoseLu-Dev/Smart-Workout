import { HttpClient } from '@angular/common/http';
import { TrainingsDay } from './../models/trainings-day.model';
import { Training } from './../models/exercise-set.model';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private trainingsUrl = `${environment.backendUrl}/trainings`;
  private daysUrl = `${environment.backendUrl}/days`;

  constructor(private http: HttpClient,) { }

  /**
   * Sends a day of training(s) to the backend to be saved
   * @param trainingDay 
   * @returns backend response with 
   */
  saveTrainingDay(trainingDay: TrainingsDay) {
    return this.http.put(`${this.daysUrl}`, trainingDay);
  }

  /**
   * Sends a training to the backend to be saved
   * @param trainingSets 
   * @returns 
   */
  saveTrainingSets(trainingSets: Training) {
    return this.http.put(`${this.trainingsUrl}`, trainingSets);
  }
}
