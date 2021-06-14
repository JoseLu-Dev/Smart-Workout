import { ExerciseListElement } from './../models/exercise.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ExerciseSpecs } from '../models/exercise.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private exercisesUrl = `${environment.backendUrl}/exercises`;

  constructor(private http: HttpClient,) { }

  getExercisesNames(): Observable<ExerciseListElement[]>{
    return this.http.get<ExerciseListElement[]>(`${this.exercisesUrl}`);
  }

  getExerciseSpecs(exerciseName: string): Observable<ExerciseSpecs>{
    return this.http.get<ExerciseSpecs>(`${this.exercisesUrl}/${exerciseName}`) ;
  }

  saveExercise(exercise: ExerciseSpecs){
    this.http.put(`${this.exercisesUrl}`, exercise).subscribe();
  }
}
