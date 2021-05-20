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


  set: any;

  public multiExercise: boolean;
  public restBetweenExercises: boolean;

  public exerciseSelected: Exercise;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.multiExercise = false;
    this.restBetweenExercises = true;
  }

  onSubmit(): void {
    throw new Error('Method not implemented.');
  }

  getExerciseSelected(exercise: Exercise) {
    this.exerciseSelected = exercise;
  }

}
