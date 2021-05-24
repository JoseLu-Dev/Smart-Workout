import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ExerciseSpecs } from '../models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  public exercises = ['Front lever', 'Planche press', 'Pull ups', 'Bench press'];

  public exercisesFromAPI: ExerciseSpecs[] = [{
    name: 'Front lever',
    variations: ['Prone', 'Supine', 'Neutral'],
    progressions: ['Full', 'Straddle', 'Tuck Advanced', 'Tuck'],
    muscleGroup: 'Lats',
    bodyWeight: true,
    static: true,
  },
  {
    name: 'Planche press',
    variations: ['Prone', 'Supine', 'Neutral'],
    progressions: [],
    muscleGroup: 'Shoulders',
    bodyWeight: true,
    static: true,
  },
  {
    name: 'Pull ups',
    variations: [],
    progressions: [],
    muscleGroup: 'Lats',
    bodyWeight: true,
    static: false,
  },
  {
    name: 'Bench press',
    variations: [],
    progressions: [],
    muscleGroup: 'Pecs',
    bodyWeight: false,
    static: false,
  }];

  constructor() { }

  getExercisesNames(){
    return of(this.exercises);
  }

  getExerciseSpecs(exerciseName: string){
    for (const exercise of this.exercisesFromAPI) {
      if (exercise.name === exerciseName) {
        return of(exercise);
      }
    }
  }
}
