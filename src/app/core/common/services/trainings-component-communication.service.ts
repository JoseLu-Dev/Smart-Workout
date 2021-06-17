import { Training } from '../models/training.models';
import { ExerciseSet } from '../models/training.models';
import { Inject, Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { TrainingsService } from './trainings.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingsComponentCommunicationService {

  // Observable sources
  private training = new BehaviorSubject<Training>(null);

  private selectedSet = new BehaviorSubject<ExerciseSet>(null);

  private indexSelected = new BehaviorSubject<number>(null);

  constructor(@Inject(TrainingsService) private trainingsService: TrainingsService) {
    this.setOnIndexSelectedChanged();
  }

  setOnIndexSelectedChanged() {
    this.indexSelected.subscribe(index => {
      if (!index && index !== 0) { return; }
      this.selectedSet.next(this.training.value.setsDone[index]);
    });
  }

  setExerciseSetToEdit(index: number) {
    this.indexSelected.next(index);
  }

  deleteExerciseSet(index: number) {
    //TODO: revise this
    delete this.training.value.setsDone[index];
  }

  confirmSetSelectedEdition(set: ExerciseSet){
    const setsDone = this.training.value.setsDone;
    const indexSelected = this.indexSelected.value;

    if(indexSelected == null
      || indexSelected >= setsDone.length){
        setsDone.push(set);
    }else{
      setsDone[indexSelected] = set;
    }
    this.indexSelected.next(null);
    this.selectedSet.next(null);
  }

  getTraining(){
    return this.training.asObservable();
  }

  getSelectedSet(){
    return this.selectedSet.asObservable();
  }

  getTrainingFromAPI(id: string){
    const observableResponse: Observable<Training> = this.trainingsService.getTraining(id);
    observableResponse.subscribe(training =>{
      this.training.next(training);
    });
  }

  saveTraining(){
    this.trainingsService.saveTraining(this.training.value);
  }

}
