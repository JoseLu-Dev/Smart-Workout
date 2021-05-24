import { ExercisesService } from './../../../services/exercises.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Exercise, ExerciseSpecs } from '../../../models/exercise.model';
import { Observable } from 'rxjs';

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

  /**
   * Exercise received when form is going to be edited
   */
  @Input() set exercise(exercise: Exercise) {
    if (exercise) {
      this.exerciseSelectedName = exercise.name;
      this.exerciseSelectedProgression = exercise.progression;
      this.exerciseSelectedVariation = exercise.variation;

      this.getExerciseFromAPI(exercise.name);
    }
  }

  /**
   * Exercises list fetched from the API
   */
  public exercises: Observable<string[]>;

  /**
   * Exercise specs of the one selected in the ng-select field
   */
  public exerciseSelectedSpecs: ExerciseSpecs;

  public exerciseSelectedName: string;
  public exerciseSelectedProgression: string;
  public exerciseSelectedVariation: string;

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.getExerciseListFromAPI();
  }

  /**
   * Calls the api to get exercise specs
   *
   * @param exerciseName exerciseName received from select field
   */
  onExerciseNameSelectedChange(exerciseName: string) {
    this.resetFormValues();

    this.getExerciseFromAPI(exerciseName);
  }

  /**
   * Called when exerciseSelectedProgression is changed in select field
   *
   * @param progression
   */
  onProgressionChange(progression: string) {
    this.exerciseSelectedProgression = progression;

    this.validateForm();
  }

  /**
   * Called when exerciseSelectedVariation is changed in select field
   *
   * @param variation
   */
  onVariationChange(variation: string) {
    this.exerciseSelectedVariation = variation;

    this.validateForm();
  }


  /**
   * Sets form 'validators' for 'progressions' and 'variations' depending on if the exercise selected has them
   */
  formIsValid(): boolean {
    const progressionRequired = this.exerciseSelectedSpecs?.progressions.length > 0;
    const progressionValid = !progressionRequired || (this.exerciseSelectedProgression != null);

    const variationRequired = this.exerciseSelectedSpecs?.variations.length > 0;
    const variationValid = !variationRequired || (this.exerciseSelectedVariation != null);

    return progressionValid && variationValid;
  }

  /**
   * Resets form 'progression' and 'variation' fields to null
   */
  resetFormValues() {
    this.exerciseSelectedSpecs = null;
    this.exerciseSelectedProgression = null;
    this.exerciseSelectedVariation = null;
  }

  /**
   * Checks if form is valid and executes o
   */
  validateForm() {
    if (this.formIsValid()) {
      this.onValidForm();
    } else {
      this.onInvalidForm();
    }
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
    exercise.name = this.exerciseSelectedSpecs.name;
    exercise.progression = this.exerciseSelectedProgression;
    exercise.variation = this.exerciseSelectedVariation;
    exercise.bodyWeight = this.exerciseSelectedSpecs.bodyWeight;
    exercise.static = this.exerciseSelectedSpecs.static;
    exercise.muscleGroup = this.exerciseSelectedSpecs.muscleGroup;

    console.log(exercise);

    return exercise;
  }

  /**
   * Gets an exercise data from the API given a name
   *
   * @param name exercise name
   * @param callback function to execute when the api call has been done
   */
  getExerciseFromAPI(name: string) {
    if (!name) {
      return;
    }
    this.exercisesService.getExerciseSpecs(name).subscribe(exercise => {
      this.exerciseSelectedSpecs = exercise;

      this.validateForm();

    });
  }

  /**
   * Gets a list of the exercises available in the API
   */
  getExerciseListFromAPI() {
    this.exercises = this.exercisesService.getExercisesNames();
  }

}
