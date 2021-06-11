import { ExerciseSet } from '../models/exercise-set.model';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsFormService {

  // Observable sources
  private trainingSets = new BehaviorSubject<ExerciseSet[]>(new Array<ExerciseSet>());

  private selectedSet = new BehaviorSubject<ExerciseSet>(null);

  private indexSelected = new BehaviorSubject<number>(null);

  constructor() {
    this.setOnIndexSelectedChanged();
  }

  setOnIndexSelectedChanged() {
    this.indexSelected.subscribe(index => {
      if (!index) { return; }
      this.selectedSet.next(this.trainingSets.value[index]);
    });
  }

  setExerciseSetToEdit(index: number) {
    this.indexSelected.next(index);
  }

  confirmSetSelectedEdition(set: ExerciseSet){
    if(this.indexSelected.value == null
      || this.indexSelected.value >= this.trainingSets.value.length){
        this.trainingSets.value.push(set);
    }else{
      this.trainingSets.value[this.indexSelected.value] = set;
    }
    console.log(this.trainingSets.value);
  }

  getSetsList(){
    return this.trainingSets.asObservable();
  }

}
