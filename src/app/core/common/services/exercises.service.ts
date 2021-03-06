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

  getExercisesByName(search: string): Observable<ExerciseListElement[]>{
    return this.http.get<ExerciseListElement[]>(`${this.exercisesUrl}/by-name/${search}`);
  }

  getFewExercises(): Observable<ExerciseListElement[]>{
    return this.http.get<ExerciseListElement[]>(`${this.exercisesUrl}/few`);
  }

  getExerciseSpecs(exerciseId: string): Observable<ExerciseSpecs>{
    return this.http.get<ExerciseSpecs>(`${this.exercisesUrl}/${exerciseId}`) ;
  }

  saveExercise(exercise: ExerciseSpecs){
    this.http.put(`${this.exercisesUrl}`, exercise).subscribe();
  }

  deleteExercise(exerciseId: string){
    this.http.delete(`${this.exercisesUrl}/${exerciseId}`, {responseType: 'text'}).subscribe();
  }
}
