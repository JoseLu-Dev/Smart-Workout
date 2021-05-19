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

  /**
   * Exercise object outputed when the form is valid
   */
  @Output() exerciseSelected = new EventEmitter<Exercise>();

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

  /**
   * Form group of the component
   */
  public exerciseFormGroup: FormGroup;

  /**
   * Exercise specs of the one selected in the ng-select field
   */
  public exerciseInSelectField: ExerciseSpecs;

  constructor(private formBuilder: FormBuilder,) { }

  /**
   * Initialize the formGroup when the component has loaded
   */
  ngOnInit() {
    this.buildForm();
  }

  /**
   * Builds the form used in the component
   */
  buildForm() {
    this.exerciseFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      progression: ['', Validators.required],
      variation: ['', Validators.required],
    });
    this.setOnExerciseSelected();
    this.setOnValidForm();
  }

  /**
   * Sets a function to be called when the field 'name' of the form is changed
   */
  setOnExerciseSelected(): void {
    this.exerciseFormGroup.get('name').valueChanges.subscribe(exerciseSelected => {
      if (exerciseSelected == null) {
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

  /**
   * Sets a function to be called when the form is valid or invalid
   */
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

  /**
   * Sets form 'validators' for 'progressions' and 'variations' depending on if the exercise selected has them
   */
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

  /**
   * Resets form 'progression' and 'variation' fields to null
   */
  resetFormProgressionAndVariation() {
    this.exerciseFormGroup.get('progression').setValue(null);
    this.exerciseFormGroup.get('variation').setValue(null);
  }


  /**
   * Outputs the exercise to parent component
   */
  onValidForm() {
    this.exerciseSelected.emit(this.getExerciseFormObject());
  }

  /**
   * Outputs the exercise with null value to parent component
   */
  onInvalidForm() {
    this.exerciseSelected.emit(null);
  }

  /**
   * Creates an Exercise object with the form data
   *
   * @returns Exercise object
   */
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

  /**
   * Gets an exercise data from the API given a name
   *
   * @param name exercise name
   * @param callback function to execute when the api call has been done
   */
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
