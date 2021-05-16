import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exercise } from '../../../models/exercise.model';
import { ExercisesSetsForm } from '../exercises-set-add-form.interface';
import { CommonSetsForm } from './common-set-form.interface';

@Component({
  selector: 'app-common-exercise-strategy',
  templateUrl: './common-strategy.component.html',
  styleUrls: ['../exercises-set-add-form.component.scss'],
})
export class CommonExerciseStrategyComponent implements OnInit, ExercisesSetsForm, CommonSetsForm {

  public exercises = ['Front lever', 'Planche press', 'Pull ups'];

  public exercisesFromAPI: Exercise[] = [{
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
    progressions: ['Full', 'Straddle', 'Tuck Advanced', 'Tuck'],
    muscleGroup: 'Shoulders',
    bodyWeight: true,
    static: false,
  },
  {
    name: 'Pull ups',
    variations: [],
    progressions: [],
    muscleGroup: 'Lats',
    bodyWeight: true,
    static: false,
  }];

  public exerciseSelected: Exercise;


  set: any;

  public multiExercise: boolean;
  public restBetweenExercises: boolean;

  setFormGroup: FormGroup;



  bandColor = '#453322';

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.multiExercise = false;
    this.restBetweenExercises = true;
    this.buildForm();
    this.setOnExerciseSelected();
  }

  setOnExerciseSelected(): void {
    this.setFormGroup.get('exercise').valueChanges.subscribe(exerciseSelected => {
      this.exerciseSelected = this.getExerciseFromAPI(exerciseSelected);
    });
  }

  buildForm(): void {
    this.setFormGroup = this.formBuilder.group({
      exercise: ['', Validators.required],
      progression: ['', this.exerciseSelected?.progressions.length > 0 ? Validators.required : null],
      variation: ['', this.exerciseSelected?.variations.length > 0 ? Validators.required : null],
      weight: ['', !this.exerciseSelected?.bodyWeight ? Validators.required : null],
      reps: ['', Validators.required],
      restSeconds: [''],
      restMinutes: ['']
    });
  }

  onSubmit(): void {
    throw new Error('Method not implemented.');
  }

  getExerciseFromAPI(name: string) {
    for (const exercise of this.exercisesFromAPI) {
      if (exercise.name === name) {
        return exercise;
      }
    }
  }

}
