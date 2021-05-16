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
      this.getExerciseFromAPI(exerciseSelected, () => {
        this.setFormValidators();
        this.resetFormProgressionAndVariation();
        if (this.exerciseFormGroup.valid) {
          this.onValidForm();
        }
      });
    });
  }

  setOnValidForm() {
    this.exerciseFormGroup.statusChanges.pipe(
      filter(() => this.exerciseFormGroup.valid)
    )
      .subscribe(status => {
        this.onValidForm();
      });
  }

  onValidForm() {
    const exercise = new Exercise();
    console.log('CORRECT');
    this.exerciseSelected.emit(null);
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
