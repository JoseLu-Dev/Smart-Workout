import { ExerciseSet, ExerciseSetPart } from './../../../../models/exercise-set.model';
import { BandUsed } from '../../../../models/exercise-set.model';
import { Exercise } from '../../../../models/exercise.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExercisesSetsForm } from '../../exercises-set-add-form.interface';
import { CommonSetsForm } from './common-set-form.interface';

@Component({
  selector: 'app-common-exercise-strategy',
  templateUrl: './common-strategy.component.html',
  styleUrls: ['../../exercises-set-add-form.component.scss'],
})
export class CommonExerciseStrategyComponent implements OnInit, ExercisesSetsForm, CommonSetsForm {

  public set: ExerciseSet;

  public setParts: ExerciseSetPart[];

  public multiExercise: boolean;
  public restBetweenExercises: boolean;

  public exerciseSelected: Exercise;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.setParts = new Array<ExerciseSetPart>();
  }

  ngOnInit() {
    this.multiExercise = false;
    this.restBetweenExercises = true;
  }

  onSubmit(): void {
    throw new Error('Method not implemented.');
  }

  setExerciseSelected(exercise: Exercise): void {
    this.exerciseSelected = exercise;
  }

  addSetPart(setPart: ExerciseSetPart, index: number) {
    if(this.setParts.length === 0){
      this.setParts.push(setPart);
    }else{
      this.setParts[index] = setPart;
    }
    console.log(this.setParts);
  }

  addExercise() {
    this.setParts.push(new ExerciseSetPart());
  }

}
