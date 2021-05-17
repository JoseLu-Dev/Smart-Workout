import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exercise, ExerciseSpecs } from '../../../models/exercise.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-exercise-selection',
  templateUrl: './exercise-selection.component.html',
  styleUrls: ['./exercise-selection.component.scss'],
})
export class ExerciseSelectionComponent implements OnInit {

  @Output() exerciseSelected = new EventEmitter<Exercise>();

  public exercises = ['Front lever', 'Planche press', 'Pull ups'];

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

  public exerciseFormGroup: FormGroup;

  public exerciseInSelectField: ExerciseSpecs;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.exerciseFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      progression: ['', Validators.required],
      variation: ['', Validators.required],
    });
    this.setOnExerciseSelected();
    this.setOnValidForm();
  }

  setFormValidators() {
    const progressionRequired = this.exerciseInSelectField?.progressions.length > 0;
    this.exerciseFormGroup.get('progression').setValidators(
      progressionRequired ? Validators.required : null
    );
    const variationRequired = this.exerciseInSelectField?.variations.length > 0;
    this.exerciseFormGroup.get('variation').setValidators(
      variationRequired ? Validators.required : null
    );
  }

  resetFormProgressionAndVariation() {
    this.exerciseFormGroup.get('progression').setValue(null);
    this.exerciseFormGroup.get('variation').setValue(null);
  }

  setOnExerciseSelected(): void {
    this.exerciseFormGroup.get('name').valueChanges.subscribe(exerciseSelected => {
      if(exerciseSelected == null){
        this.exerciseInSelectField = null;
        return;
      }
      this.getExerciseFromAPI(exerciseSelected, () => {
        this.setFormValidators();
        this.resetFormProgressionAndVariation();
        if (this.exerciseFormGroup.valid) {
          this.onValidForm();
        } else {
          this.onInvalidForm();
        }
      });
    });
  }

  setOnValidForm() {
    this.exerciseFormGroup.statusChanges.pipe(
      filter(() => this.exerciseFormGroup.valid || this.exerciseFormGroup.invalid)
    )
      .subscribe(status => {
        if (this.exerciseFormGroup.valid) {
          this.onValidForm();
        } else {
          this.onInvalidForm();
        }
      });
  }

  onValidForm() {
    this.exerciseSelected.emit(this.getExerciseFormObject());
  }

  onInvalidForm() {
    this.exerciseSelected.emit(null);
  }

  getExerciseFormObject(): Exercise {
    const exercise = new Exercise();
    exercise.name = this.exerciseInSelectField.name;
    exercise.progression = this.exerciseFormGroup.get('progression').value;
    exercise.variation = this.exerciseFormGroup.get('variation').value;
    exercise.bodyWeight = this.exerciseInSelectField.bodyWeight;
    exercise.static = this.exerciseInSelectField.static;
    exercise.muscleGroup = this.exerciseInSelectField.muscleGroup;

    return exercise;
  }

  getExerciseFromAPI(name: string, callback) {
    for (const exercise of this.exercisesFromAPI) {
      if (exercise.name === name) {
        this.exerciseInSelectField = exercise;
        callback();
        return;
      }
    }
  }

}
